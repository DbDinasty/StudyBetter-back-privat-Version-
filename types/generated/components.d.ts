import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockElemBlock extends Schema.Component {
  collectionName: 'components_block_elem_blocks';
  info: {
    displayName: 'block';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.Component<'elements-menu.buttonlink', true>;
    topic: Attribute.Blocks & Attribute.Required;
  };
}

export interface ElementsMenuButtonlink extends Schema.Component {
  collectionName: 'components_elements_menu_buttonlinks';
  info: {
    displayName: 'buttonlink';
  };
  attributes: {
    lable: Attribute.String;
    link: Attribute.String;
  };
}

export interface MetaElemMetaData extends Schema.Component {
  collectionName: 'components_meta_elem_meta_data';
  info: {
    displayName: 'metaData';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required & Attribute.Unique;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface QuestionElemAnswer extends Schema.Component {
  collectionName: 'components_answer_elem_answers';
  info: {
    displayName: 'question';
    description: '';
  };
  attributes: {
    question_text: Attribute.Text & Attribute.Required & Attribute.Unique;
    question_num: Attribute.Integer;
    answer: Attribute.Component<'question-elem.answers', true>;
  };
}

export interface QuestionElemAnswers extends Schema.Component {
  collectionName: 'components_question_elem_answers';
  info: {
    displayName: 'answers';
    description: '';
  };
  attributes: {
    text_of_answer: Attribute.Text & Attribute.Required;
    isTrue: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block-elem.block': BlockElemBlock;
      'elements-menu.buttonlink': ElementsMenuButtonlink;
      'meta-elem.meta-data': MetaElemMetaData;
      'question-elem.answer': QuestionElemAnswer;
      'question-elem.answers': QuestionElemAnswers;
    }
  }
}
