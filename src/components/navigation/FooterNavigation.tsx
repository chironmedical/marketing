import React from 'react';
import localeMapping from '../../libs/localeMapping';

const FooterNavigation = ({
  locale = "zh-HK",
  footerNavigations = [],
}: FooterNavigationProps): React.ReactElement => {
  const currentYear = (new Date()).getFullYear()

  const parseNavigationLink = (link, locale) => {
    const shortLocale = localeMapping(locale);

    if (link.link) {
      return link.link;
    } else {
      return link.page ? `/${shortLocale}/${link.page.pathname}` : '#';
    }
  }

  return (
    <div className="w-full bg-deep-blue-600 h-fit-content">
      <div className="flex flex-col min-h-fit-content h-fit-content w-full pl-sm-subject py-sm-content
        justify-center lg:pl-0 lg:flex-row lg:w-lg-inline xl:w-xl-inline mx-auto"
      >
        {
          footerNavigations.map((navigation, navigationIndex) => (
            <div
              className={`flex flex-row w-full h-fit-content lg:pl-0 lg:w-1/3 lg:text-left ${navigationIndex !== 0 && 'mt-sm-content lg:mt-0' }`}
              key={`navigation-${navigation.id}`}>
              <div className="flex flex-row h-fit-content">
                <img
                  alt="footer-info"
                  src={navigation.icon}
                  className="w-4 h-4" />
                <div className="flex flex-col ml-sm-card text-left h-fit-content">
                  <h1 className="text-sm-footer-heading lg:text-lg-footer-heading leading-4 mb-sm-subtopic text-white">
                    { navigation.title }
                  </h1>
                  {
                    navigation.links.sort((a, b) => a.rank - b.rank).map((link, linkIndex) => (
                      <div className="flex flex-col" key={`link-${link.id}`}>
                        <a
                          href={ parseNavigationLink(link, locale) }
                          className={ linkIndex !== 0 ? "mt-lg-card" : "" }>
                          <p className="text-sm-footer-article lg:text-lg-footer-article text-white">
                            { link.title }
                          </p>
                        </a>
                        {
                          link.subtitle?.length ? (
                            <p className="text-sm-footer-article lg:text-lg-footer-article text-custom-grey-300">
                              { link.subtitle }
                            </p>
                          ) : ""
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-row justify-center mb-sm-subtopic lg:mb-lg-card">
        <a href="https://api.whatsapp.com/send?phone=85267601665">
          <img
            alt="whatsapp-footer"
            src="https://cdn.chiron.care/cms/general/icons/footer/whatsapp-footer.svg"
            className="lg:w-8 lg:h-8" />
        </a>
        <a href="https://m.me/chironmedicalhk">
          <img
            alt="messenger-footer"
            src="https://cdn.chiron.care/cms/general/icons/footer/messenger-footer.svg"
            className="ml-6 lg:ml-10 lg:w-8 lg:h-8" />
        </a>
        <a href="https://fb.me/chironmedicalhk">
          <img
            alt="facebook-footer"
            src="https://cdn.chiron.care/cms/general/icons/footer/facebook-footer.svg"
            className="ml-6 lg:ml-10 lg:w-8 lg:h-8" />
        </a>
        <a href="mailto:info@chiron.care">
          <img
            alt="email-footer"
            src="https://cdn.chiron.care/cms/general/icons/footer/email-footer.svg"
            className="ml-6 lg:ml-10 lg:w-8 lg:h-8" />
        </a>
      </div>
      <p className="text-light-blue-500 text-center text-sm-p mb-lg-card hidden lg:block">
        With care we serve. Copyrights &copy; { currentYear }. All Rights Reserved by Chiron Healthcare Group Ltd.
      </p>
      <div className="flex flex-col mx-auto w-11/12 h-fit-content min-h-fit-content lg:hidden">
        <hr className="w-full" style={{ borderTop: '0.5px solid #8da9c4'}} />
        <p className="w-full text-center text-light-blue-500 m-0 tracking-widest text-sm-p py-sm-subtopic whitespace-pre-line">
          {`With care we serve. Copyrights \u00a9 ${ currentYear }.\nAll Rights Reserved by\nChiron Healthcare Group Ltd.`}
        </p>
      </div>
    </div>
  );
};

interface FooterNavigationProps {
  locale: string
  footerNavigations: any
}

export default React.memo(FooterNavigation);
