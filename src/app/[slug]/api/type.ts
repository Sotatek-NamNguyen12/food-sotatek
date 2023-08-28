export interface MerchantResponse {
  merchant: Merchant;
  promotions: any;
  enableServiceBasedMenu: boolean;
  enableSTO: boolean;
}

export interface Merchant {
  ID: string;
  name: string;
  cuisine: string;
  photoHref: string;
  timeZone: string;
  ETA: number;
  openingHours: OpeningHours;
  isIntegrated: boolean;
  distanceInKm: number;
  section: string;
  latlng: Latlng;
  menu: Menu;
  currency: Currency;
  rating: number;
  voteCount: number;
  deliverBy: string;
  radius: number;
  estimatedDeliveryFee: EstimatedDeliveryFee;
  promo: Promo;
  schedulerOrderConfig: SchedulerOrderConfig;
  sectionOpenHours: SectionOpenHours;
  status: string;
  sofConfiguration: SofConfiguration;
  businessType: string;
  ratingDetail: RatingDetail[];
  serviceBasedMenuEnabled: boolean;
  merchantGroupID: string;
  photoHrefFallback: string;
  menuLanguageList: MenuLanguageList[];
  menuTranslationInfo: MenuTranslationInfo;
}

export interface OpeningHours {
  displayedHours: string;
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
}

export interface Latlng {
  latitude: number;
  longitude: number;
}

export interface Menu {
  categories: Category[];
  menuMeta: MenuMeta;
  campaigns: Campaign3[];
  stackableOfferOption: number;
}

export interface Category {
  name: string;
  available: boolean;
  items: Item[];
  sortOrder: number;
  categoryType?: number;
  elementCards?: ElementCard[];
  ID?: string;
  createdAt?: CreatedAt;
  CustomisedData?: CustomisedData3;
}

export interface Item {
  ID: string;
  name: string;
  available?: boolean;
  priceInMinorUnit: number;
  imgHref: string;
  sortOrder: number;
  campaignID?: string;
  campaignName?: string;
  discountedPriceInMin?: number;
  priceV2: PriceV2;
  discountedPriceV2: DiscountedPriceV2;
  metadata?: string;
  discountPercentage?: string;
  itemAttributes?: ItemAttributes;
  discoveryMetadata: DiscoveryMetadata;
  takeawayPriceInMin: number;
  discountedTakeawayPriceInMin?: number;
  merchantID: string;
  thumbImages: string[];
  images: string[];
  imgHrefFallback: string;
  campaigns?: Campaign[];
  description?: string;
  modifierGroups?: ModifierGroup[];
}

export interface PriceV2 {
  amountInMinor: number;
  amountDisplay: string;
}

export interface DiscountedPriceV2 {
  amountInMinor?: number;
  amountDisplay: string;
}

export interface ItemAttributes {
  displayedTexts: DisplayedTexts;
}

export interface DisplayedTexts {}

export interface DiscoveryMetadata {
  discovery: Discovery;
}

export interface Discovery {
  requestID: string;
  service: string;
  method: string;
  discoverID: string;
}

export interface Campaign {
  campaignID: string;
  campaignTags: CampaignTag[];
  decisionID: string;
  attributionData: AttributionData;
}

export interface CampaignTag {
  tag: string;
}

export interface AttributionData {
  decisionID: string;
  discoveryID: string;
  campaignID: string;
}

export interface ModifierGroup {
  ID: string;
  name: string;
  available: boolean;
  selectionType: number;
  selectionRangeMax: number;
  modifiers: Modifier[];
  CustomisedData: CustomisedData2;
}

export interface Modifier {
  ID: string;
  name: string;
  available: boolean;
  priceInMinorUnit: number;
  sortOrder: number;
  priceV2: PriceV22;
  CustomisedData: CustomisedData;
}

export interface PriceV22 {
  amountInMinor: number;
  amountDisplay: string;
}

export interface CustomisedData {
  Name: Name;
}

export interface Name {
  Value: Value;
}

export interface Value {
  en: string;
}

export interface CustomisedData2 {
  Name: Name2;
}

export interface Name2 {
  Value: Value2;
}

export interface Value2 {
  en: string;
}

export interface ElementCard {
  type: number;
  item: Item2;
}

export interface Item2 {
  ID: string;
  name: string;
  available: boolean;
  priceInMinorUnit: number;
  imgHref: string;
  sortOrder: number;
  campaignID: string;
  campaignName: string;
  discountedPriceInMin: number;
  priceV2: PriceV23;
  discountedPriceV2: DiscountedPriceV22;
  metadata: string;
  discountPercentage: string;
  itemAttributes: ItemAttributes2;
  discoveryMetadata: DiscoveryMetadata2;
  takeawayPriceInMin: number;
  discountedTakeawayPriceInMin: number;
  merchantID: string;
  thumbImages: string[];
  images: string[];
  imgHrefFallback: string;
  campaigns: Campaign2[];
  description?: string;
}

export interface PriceV23 {
  amountInMinor: number;
  amountDisplay: string;
}

export interface DiscountedPriceV22 {
  amountInMinor: number;
  amountDisplay: string;
}

export interface ItemAttributes2 {
  displayedTexts: DisplayedTexts2;
}

export interface DisplayedTexts2 {}

export interface DiscoveryMetadata2 {
  discovery: Discovery2;
}

export interface Discovery2 {
  requestID: string;
  service: string;
  method: string;
  discoverID: string;
}

export interface Campaign2 {
  campaignID: string;
  campaignTags: CampaignTag2[];
  decisionID: string;
  attributionData: AttributionData2;
}

export interface CampaignTag2 {
  tag: string;
}

export interface AttributionData2 {
  decisionID: string;
  discoveryID: string;
  campaignID: string;
}

export interface CreatedAt {
  seconds: number;
  nanos: number;
}

export interface CustomisedData3 {
  Name: Name3;
}

export interface Name3 {
  Value: Value3;
}

export interface Value3 {
  en: string;
}

export interface MenuMeta {
  orderValueLimit: number;
  noLocationOrderValueLimit: number;
}

export interface Campaign3 {
  ID: string;
  campaignLevel: string;
  campaignType?: string;
  startTime: StartTime;
  endTime: EndTime;
  name: string;
  priority: string;
  status: string;
  tcDetails: string[];
  nameForMex?: string;
  businessTag?: number;
  decisionID: string;
  attributionData: AttributionData3;
  label?: string;
}

export interface StartTime {
  seconds: number;
}

export interface EndTime {
  seconds: number;
}

export interface AttributionData3 {
  decisionID: string;
  discoveryID: string;
  campaignID: string;
}

export interface Currency {
  code: string;
  symbol: string;
  exponent: number;
}

export interface EstimatedDeliveryFee {
  currency: Currency2;
  price: number;
  priceDisplay: string;
  multiplier: number;
}

export interface Currency2 {
  code: string;
  symbol: string;
  exponent: number;
}

export interface Promo {
  hasPromo: boolean;
  description: string;
}

export interface SchedulerOrderConfig {
  enableScheduleOrder: boolean;
  scheduleTimeSlots: ScheduleTimeSlot[];
  scheduleTimeSpan: number;
  scheduleIntervalTime: number;
  preSelectedStartTime: PreSelectedStartTime;
  minAdvancePeriodInMin: number;
}

export interface ScheduleTimeSlot {
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  from: From;
  to: To;
  available: boolean;
}

export interface From {
  seconds: number;
}

export interface To {
  seconds: number;
}

export interface PreSelectedStartTime {
  seconds: number;
}

export interface SectionOpenHours {
  open: boolean;
  displayedHours: string;
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
}

export interface SofConfiguration {
  enabled: boolean;
  thresholdInMin: number;
  thresholdForDisplay: ThresholdForDisplay;
  calculationMode: string;
  fixFeeInMin: number;
  fixFeeForDisplay: FixFeeForDisplay;
  tips: string;
  iconContent: IconContent;
}

export interface ThresholdForDisplay {
  amountInMinor: number;
  amountDisplay: string;
}

export interface FixFeeForDisplay {
  amountInMinor: number;
  amountDisplay: string;
}

export interface IconContent {
  title: string;
  amountForDisplay: AmountForDisplay;
  desc: string;
}

export interface AmountForDisplay {
  amountInMinor: number;
  amountDisplay: string;
}

export interface RatingDetail {
  score: number;
  voteCountPercentage: number;
}

export interface MenuLanguageList {
  languageCode: string;
  content: string;
  isAppliedOnMenu?: boolean;
  subtitle?: string;
}

export interface MenuTranslationInfo {
  menuLanguageSheet: MenuLanguageSheet;
}

export interface MenuLanguageSheet {
  title: string;
  menuLanguageList: MenuLanguageList2[];
}

export interface MenuLanguageList2 {
  languageCode: string;
  content: string;
  isAppliedOnMenu?: boolean;
  subtitle?: string;
}
