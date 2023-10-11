import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ROUTES from "./constants/routes";

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path={ROUTES.HOME} element={<HomePage />} />
		</Routes>
	</BrowserRouter>
);
export default App;
