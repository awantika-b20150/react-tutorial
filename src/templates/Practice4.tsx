import Button from '../components/Button'
import ERROR_MESSAGE, { ERROR_MESSAGES } from '../messages'
import {useFormData} from '../hooks/useFormData';


const Practice4: React.FC = () => {
  const {register,isSubmittable,isSearchable,errors,onSubmit,onSearch} = useFormData();
  return (
    <div className="m-auto flex flex-col gap-4">
      <h1 className="text-4xl text-center mt-2">addressSearch</h1>
      <form onSubmit={onSubmit} className="m-auto flex flex-col gap-4">
        <div className="relative flex flex-row gap-4">
          <label className="font-bold" htmlFor="postalCode">郵便番号</label>
          <div className="relative flex flex-row gap-2">
          <div className="relative">
          <input
            id="postalCode" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
            {...register('postalCode')}
          />
          {isSearchable && errors.postalCode && (
            <p className="text-xs italic text-red-500">{errors.postalCode.message}</p>
          )}
          </div>
          <div className="relative">
          <Button title="search" onClick={onSearch} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Search
          </Button>
          {isSearchable? (null):(<p className="text-xs italic text-red-500">{ERROR_MESSAGE.required}</p>)}
          </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <label className="font-bold" htmlFor="prefecture">都道府県</label>
          <div className="relative">
          <input
            id="prefecture" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
            {...register('prefecture')}
          />
          {errors.prefecture && <p className="text-xs italic text-red-500">{errors.prefecture.message}</p>}
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <label className="font-bold" htmlFor="city">市区町村</label>
          <div className="relative">
          <input
            id="city" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
            {...register('city')}
          />
          {errors.city && (
            <p className="text-xs italic text-red-500">{errors.city.message}</p>
          )}
          </div>
        </div>

        {isSubmittable ? (
          <Button title="submit" type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded'>
            送信
          </Button>
        ) : (
          <p className="text-red-500 mt-10">{ERROR_MESSAGES.notFound}</p>
        )}
      </form>
    </div>
  );
};

export default Practice4;