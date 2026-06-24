const REVIEW_BLANK_TOKEN = '___';
const REVIEW_PARTICLE_TOKENS = [
  '에서', '으로', '까지', '부터', '를', '을', '은', '는', '이', '가',
  '로', '와', '과', '에', '도', '만', '랴', '야',
];

function hasKoreanJongseong(char) {
  if (!char) return false;
  const code = char.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return false;
  return code % 28 !== 0;
}

function correctReviewParticle(word, particle) {
  if (particle === '을' && !hasKoreanJongseong(word.slice(-1))) return '를';
  if (particle === '를' && hasKoreanJongseong(word.slice(-1))) return '을';
  if (particle === '이' && !hasKoreanJongseong(word.slice(-1))) return '가';
  if (particle === '가' && hasKoreanJongseong(word.slice(-1))) return '이';
  if (particle === '으로' && !hasKoreanJongseong(word.slice(-1))) return '로';
  return particle;
}

function stripDuplicateReviewSuffix(after, answer) {
  if (!after || !answer) return after;
  const hasLeadingSpace = after.startsWith(' ');
  const trimmed = hasLeadingSpace ? after.replace(/^\s+/, '') : after;
  for (let len = Math.min(4, answer.length); len >= 1; len -= 1) {
    const suffix = answer.slice(-len);
    if (!trimmed.startsWith(suffix)) continue;
    const rest = trimmed.slice(len);
    return hasLeadingSpace ? (rest ? ` ${rest}` : '') : rest;
  }
  return after;
}

function normalizeReviewSpacing(text) {
  return text.replace(/ {2,}/g, ' ').trim();
}

function buildFilledReviewSentence(korean, answer, reviewKorean) {
  if (reviewKorean) {
    const text = reviewKorean.trim();
    if (answer && text.includes(answer)) {
      const answerIndex = text.indexOf(answer);
      return {
        text,
        before: text.slice(0, answerIndex),
        answer,
        after: text.slice(answerIndex + answer.length),
      };
    }
    return { text, before: text, answer: '', after: '' };
  }
  if (!korean || !answer || !korean.includes(REVIEW_BLANK_TOKEN)) return null;

  const blankIndex = korean.indexOf(REVIEW_BLANK_TOKEN);
  const before = korean.slice(0, blankIndex);
  let after = stripDuplicateReviewSuffix(
    korean.slice(blankIndex + REVIEW_BLANK_TOKEN.length),
    answer,
  );
  let filledAnswer = answer;

  if (
    /\s*부터\s*$/.test(before) &&
    /^까지/.test(after.trim()) &&
    !filledAnswer.endsWith('끝')
  ) {
    filledAnswer += '끝';
  }

  for (const particle of REVIEW_PARTICLE_TOKENS) {
    const spaced = after.match(new RegExp(`^ (${particle})( ([\\s\\S]*))?$`));
    if (spaced) {
      const fixedParticle = correctReviewParticle(filledAnswer, spaced[1]);
      let text = before + filledAnswer + fixedParticle;
      if (spaced[2]) text += spaced[2];
      text = normalizeReviewSpacing(text);
      return {
        text,
        before,
        answer: filledAnswer,
        after: fixedParticle + (spaced[2] || ''),
      };
    }

    const glued = after.match(new RegExp(`^(${particle})( ([\\s\\S]*))?$`));
    if (glued) {
      const fixedParticle = correctReviewParticle(filledAnswer, glued[1]);
      let text = before + filledAnswer + fixedParticle;
      if (glued[2]) text += glued[2];
      text = normalizeReviewSpacing(text);
      return {
        text,
        before,
        answer: filledAnswer,
        after: fixedParticle + (glued[2] || ''),
      };
    }
  }

  const contentMatch = after.match(/^ (\S+)([\s\S]*)$/);
  if (contentMatch) {
    const text = normalizeReviewSpacing(
      before + filledAnswer + ' ' + contentMatch[1] + contentMatch[2],
    );
    return {
      text,
      before,
      answer: filledAnswer,
      after: ` ${contentMatch[1]}${contentMatch[2]}`,
    };
  }

  const text = normalizeReviewSpacing(before + filledAnswer + after);
  return { text, before, answer: filledAnswer, after };
}

function buildReviewWordSummary(word, level, options) {
  options = options || {};
  if (!word) return { primary: '', secondary: '' };

  let secondary = word.english || '';
  if (level === 'expert' && Array.isArray(word.meanings)) {
    secondary = word.meanings
      .map(item => item.english)
      .filter(Boolean)
      .join(' · ');
  }

  if (word.korean && word.answer && word.korean.includes(REVIEW_BLANK_TOKEN)) {
    const filled = buildFilledReviewSentence(
      word.korean,
      word.answer,
      word.reviewKorean,
    );
    if (filled) {
      const summary = {
        primary: filled.text,
        secondary,
      };
      if (filled.answer && options.emphasizeAnswer) {
        summary.primaryParts = {
          before: filled.before,
          answer: filled.answer,
          after: filled.after,
          emphasize: true,
        };
      }
      return summary;
    }
  }

  return {
    primary: word.korean || '',
    secondary,
  };
}
