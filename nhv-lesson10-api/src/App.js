
import { useEffect, useState } from 'react';
import './App.css';
import nhvCategorylist from './components/nhvCategorylist';
import axios from './api/nhvApi';
import nhvCategoryform from './components/nhvCategoryform';


function App() {
  //Lấy dữ liệu từ api
  const [nhvCategories,setnhvCategories] = useState([]);

  const getCategories = async () => {
   try {
    const nhvCateRespose = await axios.get("nhvCategory");
    setnhvCategories(nhvCateRespose.data);
   } catch (error) {
    console.log("Lỗi", error);
   }
  }

  useEffect (() => {
    getCategories();
    console.log("nhvCategories: ", nhvCategories);
  }, [])
  //Trạng thái form
  const [nhvCategoryIsForm, setnhvCategoryIsFrom] = useState(false);

  const nhvHandleAddNew = (param) =>{
    setnhvCategoryIsFrom(param);
  }

  const nhvHandleCategoryCloseForm = (param) => {
    setnhvCategoryIsFrom(param);
  }

  return (
    <div className="container border my-3">
      <h1>Nguyễn Văn Quyết - Call API</h1>

      <nhvCategorylist  rendernhvCategories = {nhvCategories}
                onAddNew={nhvHandleAddNew} />
      <hr/>
      {
        nhvCategoryIsForm ===true?<nhvCategoryform onCloseForm={nhvHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;
