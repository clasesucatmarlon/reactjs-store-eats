import PropTypes from 'prop-types';
import {
	RiUser3Line,
	RiAddLine,
	RiShoppingCart2Line,
	RiMenu3Line,
	RiCloseFill,
} from 'react-icons/ri';
import { Colors } from '../utils/Colors';

export const MovilMenu = ({ showMenu, setShowMenu }) => {
	const { colorBackGroundMenu } = Colors;

	/**
	 * Function for changed the state of showMenu
	 * @returns status showMenu variable changed
	 */
	const ToogleMenu = () => {
		setShowMenu(!showMenu);
	};

	/**
	 * Function for changed the state of showMenu to false
	 * @returns status showMenu variable changed to false
	 */
	const CloseMenu = () => {
		setShowMenu(false);
	};

	return (
		<nav
			className={`bg-[${colorBackGroundMenu}] lg:hidden fixed w-full bottom-0 left-0 text-4xl text-gray-500 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl`}
		>
			<button>
				<RiUser3Line className='p-2' />
			</button>
			<button>
				<RiAddLine className='p-2' />
			</button>
			<button>
				<RiShoppingCart2Line className='p-2' />
			</button>
			<button>
				{showMenu ? (
					<RiCloseFill onClick={CloseMenu} className='text-white p-2' />
				) : (
					<RiMenu3Line onClick={ToogleMenu} className='text-white p-2' />
				)}
			</button>
		</nav>
	);
};

MovilMenu.propTypes = {
	showMenu: PropTypes.bool.isRequired,
	setShowMenu: PropTypes.func.isRequired,
};
