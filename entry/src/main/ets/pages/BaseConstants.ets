
export class BaseConstants {
  static readonly FULL_PERCENT: string = '100%';
  static readonly FULL_SIZE: string = '100%';
  static readonly FULL_HEIGHT: string = '100%';
  static readonly FULL_WIDTH: string = '100%';
  static readonly NINETY_WIDTH_PERCENT: string = '90%';
  static readonly IMAGE_ONE_WIDTH_SM: string = '66.6%';
  static readonly IMAGE_ONE_WIDTH_MD: string = '63.8%';
  static readonly IMAGE_ONE_WIDTH_LG: string = '32.1%';
  static readonly TAB_PADDING_TOP: string = '28.6%'
  static readonly TAB_PADDING_BOTTOM: string = '28.6%'
  static readonly HOME_LIST_WIDTH: string = '37%'
  static readonly APPLET_LIST_WIDTH: string = '37%'
  static readonly IMAGE_ONE_ASPECT_RATIO: number = 1.33;
  static readonly SMALL_MINI_FONT_SIZE: string = '11fp';
  /**
   * Text property
   */

  static readonly FONT_WEIGHT_SEVEN: number = 700;
  static readonly FONT_WEIGHT_SIX: number = 600;
  static readonly FONT_WEIGHT_FIVE: number = 500;
  static readonly FONT_WEIGHT_FOUR: number = 400;

  /**
   * Application about
   */
  static readonly SPLIT_DOCUMENT_SCREEN = false;
  static readonly SPLIT_APPLET_SCREEN = false;
  /**
   * Flex about
   */
  static readonly FLEX_GROW_ONE = 1;
  static readonly LAYOUT_WEIGHT_ONE = 1;
  static readonly FLEX_SHRINK_ZERO = 0;
  static readonly FLEX_SHRINK_ONE = 1;
  /**
   * HomeTab
   */
  static readonly HOME_TAB_HEIGHT_SM: string = '56vp';
  static readonly HOME_TAB_HEIGHT_MD: string = '56vp';
  static readonly HOME_TAB_HEIGHT_LG: string = '100%';
  static readonly HOME_TAB_WIDTH_SM: string = '100%';
  static readonly HOME_TAB_WIDTH_MD: string = '100%';
  static readonly HOME_TAB_WIDTH_LG: string = '96vp';
  static readonly CONTACTS_PHONE_WIDTH_SM: string = '27%';
  static readonly CONTACTS_PHONE_WIDTH_MD: string = '28%';
  static readonly CONTACTS_PHONE_WIDTH_LG: string = '25%';
  static readonly CONTACTS_DETAIL_HEIGHT_SM: string = '100%';
  static readonly CONTACTS_DETAIL_HEIGHT_MD: string = '100%';
  static readonly CONTACTS_DETAIL_HEIGHT_LG: string = '90%';
  static readonly CONTACTS_ITEM_HEIGHT_SM: string = '11%';
  static readonly CONTACTS_ITEM_HEIGHT_MD: string = '11%';
  static readonly CONTACTS_ITEM_HEIGHT_LG: string = '10%';
  /**
   * Document tab
   */
  static readonly DOCUMENT_TITLE_HEIGHT_SM: string = '33%';
  static readonly DOCUMENT_TITLE_HEIGHT_MD: string = '58%';
  static readonly DOCUMENT_TITLE_HEIGHT_LG: string = '100%';
  static readonly DOCUMENT_TITLE_SPACE_SM: number = 32;
  static readonly DOCUMENT_TITLE_SPACE_MD: number = 56;
  static readonly DOCUMENT_TITLE_SPACE_LG: number = 103;
  /**
   * Component opacity value: 1.
   */
  static readonly FULL_OPACITY: number = 1;
  /**
   * Component opacity value: 0.6.
   */
  static readonly SIXTY_OPACITY: number = 0.6;
  /**
   * Device grid column list.
   */
  static readonly DEVICE_GRID_COLUMNS: string[] = ['1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr 1fr 1fr 1fr'];
  /**
   * Device 2in1.
   */
  static readonly DEVICE_2IN1: string = '2in1';
}

/**
 * Current feature home, applet or document
 */
export enum CurrentFeature {
  HOME = 0,
  APPLET = 1,
  DOCUMENT = 2
}

/**
 * Current page home,conversation or socialCircle
 */
export enum CurrentPage {
  HOME = 0,
  CONVERSATION = 1,
  SOCIAL_CIRCLE = 2,
  ME = 3
}

export enum DeviceTypes {
  PHONE = 'phone',
  TABLET = 'tablet',
  "2IN1" = '2in1',
}