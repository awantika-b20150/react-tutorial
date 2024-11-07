import "./App.css";
import Practice1 from './components/practice1';

function App() {
	return (
		<div>
		<div className="box-border pb-80 ml-60 mr-60 mt-20 h-200 w-104 border-4 ..."> 
		<div className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">
			React-v3
		</div>
		<div className='mt-14 mb-50 flex space-x-20 flex-row items-center justify-center'>
		<Practice1 name='button1' styleb={'bg-[#f87171] border-[#f87171] text-[#f9fafb] px-16'} type='button' />
		<Practice1 name='button2' styleb={'bg-[#fcd34d] border-[#fcd34d] text-[#f9fafb] px-16'} type='button' />
		<Practice1 name='button3' styleb={'bg-[#86efac] border-[#86efac] text-[#f9fafb] px-16'} type='button' />
		</div>
		</div>
		</div>
	);
}

export default App;
