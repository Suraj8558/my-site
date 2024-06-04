import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Redirection`.
 */
export type RedirectionProps = SliceComponentProps<Content.RedirectionSlice>;

/**
 * Component for "Redirection" Slices.
 */
const Redirection = ({ slice }: RedirectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for redirection (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Redirection;
