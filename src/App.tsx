import "./App.css";
import Practice1 from "./components/Practice1";

function App() {
	return (
		<div>
		<div className="box-border pb-80 ml-60 mr-60 mt-20 h-200 w-104 border-4 ..."> 
		<div className="bg-slate-400 text-center p-[20px] text-4xl text-gray-50">
			React-v3
		</div>
		<div className='mt-14 mb-50 flex space-x-20 flex-row items-center justify-center'>
		<Practice1 />
		</div>
		</div>
		</div>
	);
}

export default App;
