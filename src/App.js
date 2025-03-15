import logo from './logo.svg';
import './App.css';
import Card from './components/card/card';
import Counter from './components/counter/counter';
import Input from './components/useStateWIthObject/input';
import AddItem from './components/useStateWithArray/addItems';
import Shapes from './components/CreateShapes/shapes';
import Color from './components/clickedColor/color';
import Index from './components/otp';
import Time from './components/time ticker/time';
import Design from './components/Add Design/design';
import City from './components/City List/city';
import DoubleCounter from './components/Double Counter/doubleCounter';
import Render from './components/conditional Rendering/render';
import List from './components/Toppers List/list';
import Theme from './components/Theme Toggler/theme';
import WordCounter from './components/React Word Counter';
import MovieCard from './components/Movie Card/MovieCard';
import MovieListing from './container/movieListing';
import LoginForm from './components/Login Form/loginForm';
import MovieListingOrder from './components/MovieListingSort/movieListingOrder';
import UseEffect from './components/UseEffext/useEffect';
import Practice from './components/Unmounting/practice';
import Effect from './components/effect';
import Rout from './components/Routing/rout';
import SingleRoute from './components/Routing/singleRoute';
import { Routes,Route, Form } from 'react-router-dom';
import ProductListing from './container/productListing';
import SingleProductDetails from './components/productDetails';
import Child from './components/context/child';
import GrandParent from './components/context/grandParent';
import Red from './components/useReducer/red';
import RedObject from './components/useReducer/redObject';
import PracticeSo from './practice';
import CompA from './components/useContext & useReducer/compA';
import UseRef from './components/useRef/useRef';
import UseRef2 from './components/useRef/useRef2';
import FormData from './components/FormData/formData';
import PracticeKaro from './practice';
import Btn from './btn';
import ReducerPrac from './components/pract/reducerPrac';
import { AppContext } from './components/UseReduceraAndUseContext';
import { AppContextProvider } from './components/UseReduceraAndUseContext/AppCotextProvider';


function App() {
  return (
    <div className="App">
    {/* <Card/> */}
    {/* {<Counter/>} */}
    {/* <Input/> */}
    {/* <AddItem/> */}
     {/* <Shapes/> */}
    {/* {<Color/>} */}
    {/* {<Practice/>} */}
    {/* <Index/> */}
    {/* <Time/> */}
    {/* {<Design/>} */}
    {/* {<Practice/>} */}
    {/* <City/> */}
    {/* <DoubleCounter/> */}
    {/* <Render/> */}
    {/* <List/> */}
    {/* <Theme/> */}
    {/* <WordCounter/> */}
    {/* <MovieCard rating={'Rating:8.706'} 
    votes={'Votes:26424'} 
    movieName={'The shawshank redemption'} 
    imgSrc={'https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg'
    }/> */}
    {/* {<MovieListing/>} */}
    {/* <LoginForm/> */}
    {/* <MovieListingOrder/> */}
    {/* <UseEffect/> */}
  {/* <Practice/> */}
  {/* {  <Practice/>} */}
  {/* <UseEffect/> */}
  {/* <Effect/> */}
  {/* <MovieListingOrder/> */}
      {/* <CompA/> */}
  {/* <Rout/> */}
  {/* <ProductListing/> */}
  {/* <FormData/> */}
  {/* <PracticeKaro/> */}
  {/* <Shapes/> */}
  {/* <PracticeKaro/>
  <WordCounter/> */}
 
  {/* <GrandParent/> */}
     {/* { <UseRef2/>} */}
      {/* <CompA/> */}
      {/* <PracticeSo/> */}
 {/* <SingleRoute/>
 <Routes>
  <Route path='/card' element={<Card/>}/>
  <Route path='/time' element={<Time/>}/>
  
 </Routes> */}
   {/* <Rout/>
  <Routes>
    <Route path='/card' element={<Card/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/input' element={<Input/>}/>
    <Route path='/addItem' element={<AddItem/>}/>
    <Route path='/time' element={<Time/>}/>
    <Route path='/design' element={<Design/>}/>
    <Route path='render' element={<Render/>}/>
    <Route path='/list' element={<List/>}/>
    <Route path='/theme' element={<Theme/>}/>
    <Route path='/city' element={<City/>}/>
    <Route path='/movieLsiting'element={<MovieListingOrder/>}/>
    <Route path='productListing' element={<ProductListing/>}/>


    //*****Dynamic Routing********** 
    
    <Route path='products/:id' element={<SingleProductDetails/>}/>    /// products/:id is coming from window.location.path from container/productsListing
    // whenever path comes as products/id i.e. products/1 then <SingleProductDetails/> will be called
    <Route path='*' element={<h2>Not Found</h2>}/>
  </Routes>  */}



  {/* <PracticeKaro/>
  <Routes>
    <Route path='/Project-1' element={<Card/>} />
    <Route path='/Project-2' element={<WordCounter/>}/>
  </Routes> */}
  {/* <AppContextProvider>
    <Design/>
    <Card/>
  </AppContextProvider> */}
  {/* <NewContProvider>
    <WordCounter/>
  </NewContProvider> */}
  {/* <Provider>
    <Shapes/>
  </Provider> */}
    </div>
  );
}

export default App;
