import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { BodyPartsBoard } from './components/Exersizes/ExercisesBoard/BodyPartsBoard';
import { EquipmentBoard } from './components/Exersizes/ExercisesBoard/EquipmentBoard';
import { MusclesBoard } from './components/Exersizes/ExercisesBoard/MusclesBoard';
import { ExersizeWrap } from './components/Exersizes/ExercisesWrap/ExercisesWrap';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import SharedLayout from './components/SharedLayout/SharedLayout';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import Error404Page from './pages/Error404Page/Error404Page';
import ExercisesPage from './pages/ExercisesPage/ExercisePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { isLogin } from './redux/selectors';

// const test = import.meta.env.VITE_API_TEST;

// const USER_IS_LOGINING = true;

function App() {
  const isLoggedIn = useSelector(isLogin);
  // console.log(isLoggedIn);

  // const { data, isSuccess } = useGetCurrentUserQuery(isLoggedIn, {
  //   skip: !isLoggedIn,
  // });

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/welcome" isLoggedIn={isLoggedIn}>
              <DiaryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/welcome"
          element={
            <PublicRoute restricted isLoggedIn={isLoggedIn}>
              <WelcomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute restricted isLoggedIn={isLoggedIn}>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute restricted isLoggedIn={isLoggedIn}>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/signin" selfCall isLoggedIn={isLoggedIn}>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/products"
          element={
            <PrivateRoute redirectTo="/signin" isLoggedIn={isLoggedIn}>
              <ProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/exercises"
          element={
            <PrivateRoute redirectTo="/signin" isLoggedIn={isLoggedIn}>
              <ExercisesPage />
            </PrivateRoute>
          }
        >
          <Route index element={<ExersizeWrap />} />
          <Route path="bodyparts" element={<BodyPartsBoard />} />
          <Route path="muscles" element={<MusclesBoard />} />
          <Route path="equipment" element={<EquipmentBoard />} />
          {/* може роути тут */}
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  );
}
export default App;
