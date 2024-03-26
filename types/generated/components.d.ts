import type { Schema, Attribute } from '@strapi/strapi';

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

export interface ElementsMenuDropdown extends Schema.Component {
  collectionName: 'components_elements_menu_dropdowns';
  info: {
    displayName: 'dropdown';
    icon: 'cursor';
  };
  attributes: {
    lable: Attribute.String;
    sections: Attribute.Relation<
      'elements-menu.dropdown',
      'oneToMany',
      'api::section.section'
    >;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements-menu.buttonlink': ElementsMenuButtonlink;
      'elements-menu.dropdown': ElementsMenuDropdown;
      'meta-elem.meta-data': MetaElemMetaData;
    }
  }
}
