import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockElemBlock extends Schema.Component {
  collectionName: 'components_block_elem_blocks';
  info: {
    displayName: 'block';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Component<'elements-menu.buttonlink', true>;
    topic: Attribute.Blocks;
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
    description: '';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface QuestionElemAnswerId extends Schema.Component {
  collectionName: 'components_question_elem_answer_ids';
  info: {
    displayName: 'answer_id';
    description: '';
  };
  attributes: {
    answer_id: Attribute.String;
    text_answer: Attribute.Text;
  };
}

export interface QuestionElemAnswer extends Schema.Component {
  collectionName: 'components_answer_elem_answers';
  info: {
    displayName: 'question';
    description: '';
  };
  attributes: {
    question_text: Attribute.Text & Attribute.Required;
    question_num: Attribute.Integer;
    answer_id: Attribute.Component<'question-elem.answer-id', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block-elem.block': BlockElemBlock;
      'elements-menu.buttonlink': ElementsMenuButtonlink;
      'meta-elem.meta-data': MetaElemMetaData;
      'question-elem.answer-id': QuestionElemAnswerId;
      'question-elem.answer': QuestionElemAnswer;
    }
  }
}
