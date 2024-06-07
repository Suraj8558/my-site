import Link from 'next/link'
const MainMenu = ({MenuData}:any) => {
	return (
		<ul className="mainmenu">
			{MenuData?.map((menu : any, menuIndex : number) => (
				<>
						{console.log("menu", menu)}
						
					<li
					className={menu?.child_menu?.data?.menus.length > 0 ? "has-dropdown" : ""}
					key={`menu-item-${menuIndex}`}
				>

					<Link href={menu.menu_link}>{menu.menu_lablel}</Link>
					{menu?.child_menu?.data?.menus.length > 0 && (
						<ul className="axil-submenu">
							{menu?.child_menu?.data?.menus?.map((submenuItem: any, submenuIndex: number) => (
								<li key={`submenu-item-${submenuIndex}`}>
									<Link href={submenuItem.menu_link}>{submenuItem.menu_label}</Link>
								</li>
							))}
						</ul>
					)}
				</li>
				</>
			))}
		</ul>
	);
};

export default MainMenu;
