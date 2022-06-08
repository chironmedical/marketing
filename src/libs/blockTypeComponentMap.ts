import Banner from "../components/elements/Banner";
import BannerSelector from "../components/elements/BannerSelector";
import Container from "../components/elements/Container";
import Header from "../components/elements/Header";
import HeaderI18n from "../components/elements/HeaderI18n";
import HorizontalRule from "../components/elements/HorizontalRule";
import Paragraph from "../components/elements/Paragraph";
import ParagraphI18n from "../components/elements/ParagraphI18n";
import ImageBlock from "../components/elements/ImageBlock";
import ImageIcon from "../components/elements/ImageIcon";
import HTMLRender from "../components/elements/HTMLRender";
import Table from "../components/elements/Table";
import SlideBanner from "../components/elements/SlideBanner";
import BannerLeftText from "../components/elements/BannerLeftText";
import PlanCheckTable from "../components/elements/PlanCheckTable";
import LegacyLandingpageContent from "../components/elements/LegacyLandingpageContent";

import ContactCard from "../components/cards/ContactCard";
import ServiceDetailsCard from "../components/cards/ServiceDetailsCard";
import WhyChironCard from "../components/cards/WhyChironCard";
import BookingCard from "../components/cards/BookingCard";
import PractitionerCards from "../components/cards/PractitionerCards";
import DownloadCard from "../components/cards/DownloadCard";
import IconCard from "../components/cards/IconCard";
import BodyCheckCard from "../components/cards/BodyCheckCard";
import AdmissionProcedureCard from "../components/cards/AdmissionProcedureCard";
import InsuranceCard from "../components/cards/InsuranceCard";
import EmergencyContactCard from "../components/cards/EmergencyContactCard";

import PostInfo from "../components/posts/PostInfo";

import ContactUs from "../components/blocks/ContactUs";
import DoctorDetailBlock from "../components/blocks/DoctorDetailBlock";
import ServiceRangeBlock from "../components/blocks/ServiceRangeBlock";
import IssuesBlock from "../components/blocks/IssuesBlock";
import HospitalBlock from "../components/blocks/HospitalBlock";
import RelatedArticlesBlock from "../components/blocks/RelatedArticlesBlock";
import RelatedPromotionsBlock from "../components/blocks/RelatedPromotionsBlock";
import ServiceCategoryBlock from "../components/blocks/ServiceCategoryBlock";
import BranchesCategoryBlock from "../components/blocks/BranchesCategoryBlock";
import ArticleCardBlock from "../components/blocks/ArticleCardBlock";
import ArticleCardBlockByTag from "../components/blocks/ArticleCardBlockByTag";
import ClinicCardBlock from "../components/blocks/ClinicCardBlock";
import DoctorCardBlock from "../components/blocks/DoctorCardBlock";
import LandingPageCardBlock from "../components/blocks/LandingPageCardBlock";
import EventCardBlock from "../components/blocks/EventCardBlock";
import SocialResponsibilityCardBlock from "../components/blocks/SocialResponsibilityCardBlock";
import PromotionCardBlock from "../components/blocks/PromotionCardBlock";
import PromotionsImageCarouselBlock from "../components/blocks/PromotionsImageCarouselBlock";
import PromotionCarouselBlock from "../components/blocks/PromotionCarouselBlock";
import ArticleTwoColCardBlock from "../components/blocks/ArticleTwoColCardBlock";
import ServiceRangeCarouselBlock from "../components/blocks/ServiceRangeCarouselBlock";
import DoctorCarouselBlock from "../components/blocks/DoctorCarouselBlock";
import LandingpageCarouselBlock from "../components/blocks/LandingpageCarouselBlock";
import AlignmentBlock from "../components/blocks/AlignmentBlock";
import SwitchPlanBlock from "../components/blocks/SwitchPlanBlock";
import MDTSwitchPlanBlock from "../components/blocks/MDTSwitchPlanBlock";
import SwitchTablePlanBlock from "../components/blocks/SwitchTablePlanBlock";
import SwitchTimelineBlock from "../components/blocks/SwitchTimelineBlock";
import BodyCheckPlanBlock from "../components/blocks/BodyCheckPlanBlock";
import TimelineBlock from "../components/blocks/TimelineBlock";
import VideoBlock from "../components/blocks/VideoBlock";
import FeaturesCarouselBlock from "../components/blocks/FeaturesCarouselBlock";
import ContactUsImageSlide from "../components/blocks/ContactUsImageSlide";

const blockTypeComponentMap = {
  'Banner': {
    Component: Banner
  },
  'BannerSelector': {
    Component: BannerSelector
  },
  'Container': {
    Component: Container
  },
  'Header': {
    Component: Header
  },
  'HeaderI18n': {
    Component: HeaderI18n
  },
  'HorizontalRule': {
    Component: HorizontalRule
  },
  'Paragraph': {
    Component: Paragraph
  },
  'ParagraphI18n': {
    Component: ParagraphI18n
  },
  'ImageBlock': {
    Component: ImageBlock
  },
  'ImageIcon': {
    Component: ImageIcon
  },
  'HTMLRender': {
    Component: HTMLRender
  },
  'Table': {
    Component: Table
  },
  'SlideBanner': {
    Component: SlideBanner
  },
  'BannerLeftText': {
    Component: BannerLeftText
  },
  'PlanCheckTable': {
    Component: PlanCheckTable
  },
  'LegacyLandingpageContent': {
    Component: LegacyLandingpageContent
  },

  'ContactCard': {
    Component: ContactCard
  },
  'ServiceDetailsCard': {
    Component: ServiceDetailsCard
  },
  'WhyChironCard': {
    Component: WhyChironCard
  },
  'BookingCard': {
    Component: BookingCard
  },
  'PractitionerCards': {
    Component: PractitionerCards
  },
  'DownloadCard': {
    Component: DownloadCard
  },
  'IconCard': {
    Component: IconCard
  },
  'BodyCheckCard': {
    Component: BodyCheckCard
  },
  'AdmissionProcedureCard': {
    Component: AdmissionProcedureCard
  },
  'InsuranceCard': {
    Component: InsuranceCard
  },
  'EmergencyContactCard': {
    Component: EmergencyContactCard
  },

  'PostInfo': {
    Component: PostInfo
  },

  'ContactUs': {
    Component: ContactUs
  },
  'DoctorDetailBlock': {
    Component: DoctorDetailBlock
  },
  'ServiceRangeBlock': {
    Component: ServiceRangeBlock
  },
  'IssuesBlock': {
    Component: IssuesBlock
  },
  'HospitalBlock': {
    Component: HospitalBlock
  },
  'RelatedArticlesBlock': {
    Component: RelatedArticlesBlock
  },
  'RelatedPromotionsBlock': {
    Component: RelatedPromotionsBlock
  },
  'ServiceCategoryBlock': {
    Component: ServiceCategoryBlock
  },
  'BranchesCategoryBlock': {
    Component: BranchesCategoryBlock
  },
  'ArticleCardBlock': {
    Component: ArticleCardBlock
  },
  'ArticleCardBlockByTag': {
    Component: ArticleCardBlockByTag
  },
  'ClinicCardBlock': {
    Component: ClinicCardBlock
  },
  'DoctorCardBlock': {
    Component: DoctorCardBlock
  },
  'LandingPageCardBlock': {
    Component: LandingPageCardBlock
  },
  'EventCardBlock': {
    Component: EventCardBlock
  },
  'SocialResponsibilityCardBlock': {
    Component: SocialResponsibilityCardBlock
  },
  'PromotionCardBlock': {
    Component: PromotionCardBlock
  },
  'PromotionsImageCarouselBlock': {
    Component: PromotionsImageCarouselBlock
  },
  'PromotionCarouselBlock': {
    Component: PromotionCarouselBlock
  },
  'ArticleTwoColCardBlock': {
    Component: ArticleTwoColCardBlock
  },
  'ServiceRangeCarouselBlock': {
    Component: ServiceRangeCarouselBlock
  },
  'DoctorCarouselBlock': {
    Component: DoctorCarouselBlock
  },
  'LandingpageCarouselBlock': {
    Component: LandingpageCarouselBlock
  },
  'AlignmentBlock': {
    Component: AlignmentBlock
  },
  'SwitchPlanBlock': {
    Component: SwitchPlanBlock
  },
  'MDTSwitchPlanBlock': {
    Component: MDTSwitchPlanBlock
  },
  'SwitchTablePlanBlock': {
    Component: SwitchTablePlanBlock
  },
  'SwitchTimelineBlock': {
    Component: SwitchTimelineBlock
  },
  'BodyCheckPlanBlock': {
    Component: BodyCheckPlanBlock
  },
  'TimelineBlock': {
    Component: TimelineBlock
  },
  'VideoBlock': {
    Component: VideoBlock
  },
  'FeaturesCarouselBlock': {
    Component: FeaturesCarouselBlock
  },
  'ContactUsImageSlide': {
    Component: ContactUsImageSlide
  }
};

export default blockTypeComponentMap;
