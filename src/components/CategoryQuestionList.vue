<template>
  <ul class="question-list">
    <li class="question white-text z-depth-1"
      v-for="(q, i) in category.questions"
      :class="{'theme-main': !q.seenAnswer, 'theme-disabled': q.seenAnswer,
              'unanswered': !q.seenAnswer, 'answer': q.seenAnswer}"
      :key="q.hint"
      @click="$emit('click-question', i, q)">{{ q.points }}</li>
  </ul>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { Question, Category } from '../question';

@Component
export default class CategoryQuestionList extends Vue {
  @Prop() private category!: Category;

  // eslint-disable-next-line
  private questionClass(q: Question): any {
    return {
      'theme-main': !q.seenAnswer,
      'theme-disabled': q.seenAnswer,
      unanswered: !q.seenAnswer,
      answer: q.seenAnswer,
    };
  }
}
</script>

<style scoped lang="scss">
@use 'src/assets/theme';

.theme-main {
  background: theme.$main;
}

.theme-disabled {
  background: theme.$disabled;
}

ul.question-list {
  margin: 0;
}

.question {
  display: block;
  padding: 1rem;
  margin: 0.4rem 0.2rem;
}

.question.unanswered {
  cursor: pointer;
}

.question.answered {
  cursor: default;
}
</style>
