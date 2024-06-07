import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MenuList`.
 */
export type MenuListProps = SliceComponentProps<Content.MenuListSlice>;

/**
 * Component for "MenuList" Slices.
 */
const MenuList = ({ slice }: MenuListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for menu_list (variation: {slice.variation}) Slices
    </section>
  );
};

export default MenuList;
