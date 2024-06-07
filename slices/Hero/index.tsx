import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Tilt from 'react-parallax-tilt';


export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
    <div className="axil-slider-area axil-slide-activation">
			<div
				className="axil-slide slide-style-default theme-gradient slider-fixed-height d-flex align-items-center paralax-area">
				<div className="container">
					<div className="row align-items-center pt_md--60 mt_sm--60">
						<div className="col-lg-7 col-12 order-2 order-lg-1">
           
							<div className="content pt_md--30 pt_sm--30">
              {isFilled.richText(slice.primary.title) && (
                <div
                  className="axil-display-1"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                >
                 <PrismicRichText field={slice.primary.title} />
                </div>
              )}

              {isFilled.richText(slice.primary.description) && (
                <div
                className="subtitle-3"
                data-aos="aos-fade-in-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <PrismicRichText field={slice.primary.description} />
              </div>
            )} 
								
                {isFilled.link(slice.primary.callToActionLink) && (
              <PrismicNextLink 
              className="axil-button btn-large btn-transparent"
              data-aos="aos-fade-in-up"
              data-aos-duration="1000"
              data-aos-delay="400"
                field={slice.primary.callToActionLink}
              >
                {slice.primary.callToActionLabel || "Learn more…"}
              </PrismicNextLink>
            )}
							</div>
						</div>
						<div className="col-lg-5 col-12 order-1 order-lg-2">
							<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
								<div className="topskew-thumbnail-group text-start text-lg-end">
									<div className="thumbnail paralax-image">
										<div className="light-image">
                      {isFilled.image(slice.primary.image) && (
                        <PrismicNextImage
                          field={slice.primary.image}
                          className="es-fullpage-hero__image"
                        />
                      )}
										</div>
									</div>
								</div>
							</Tilt>
						</div>
					</div>
				</div>
			</div>
		</div>
   
    </>
  );
};

export default Hero;
