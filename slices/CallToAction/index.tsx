import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  const alignment = slice.variation === "alignLeft" ? "left" : "center";
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded es-call-to-action pt--80" 
    >
      <div className="es-bounded__content es-call-to-action__content container">
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            className="es-call-to-action__image"
            field={slice.primary.image}
          />
        )}
        <div className="es-call-to-action__content">
          {isFilled.richText(slice.primary.title) && (
            <div className="es-call-to-action__content__heading">
              <PrismicRichText field={slice.primary.title} />
            </div>
          )}
          {isFilled.richText(slice.primary.paragraph) && (
            <div className="es-call-to-action__content__paragraph">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>
          )}
        </div>
        {isFilled.link(slice.primary.buttonLink) && (
          <PrismicNextLink
            className="es-call-to-action__button"
            field={slice.primary.buttonLink}
          >
            {slice.primary.buttonLabel || "Learn more…"}
          </PrismicNextLink>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
