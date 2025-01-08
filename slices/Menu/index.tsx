import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Menu`.
 */
export type MenuProps = SliceComponentProps<Content.MenuSlice>;

/**
 * Component for "Menu" Slices.
 */
const Menu = ({ slice }: MenuProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for menu (variation: {slice.variation}) Slices
    </section>
  );
};

export default Menu;
