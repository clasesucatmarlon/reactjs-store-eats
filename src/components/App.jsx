import { useState } from 'react';
import { MovilMenu } from './movil/MovilMenu';
import { Sidebar } from './shared/Sidebar';
import { Colors } from './utils/Colors';

const App = () => {
	const { colorBackGround } = Colors;
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className={`bg-[${colorBackGround}] w-full min-h-screen`}>
			<Sidebar showMenu={showMenu} />
			<MovilMenu showMenu={showMenu} setShowMenu={setShowMenu} />
		</div>
	);
};

export default App;
