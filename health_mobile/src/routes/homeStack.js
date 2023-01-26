import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/home.screen";
import Welcome from "../screens/welcome.screen";
import Form from "../screens/form.screen";
import FirstDot from "../shared/fourDots";
import Convo from "../screens/convo.screen";
import Detail from "../screens/detail.screen";
import Doctors from "../screens/doctors.screen";
const screens = {
  Home: {
    screen: Home,
    headerTitle: () => <FirstDot />,
  },
  Welcome: {
    screen: Welcome,
  },
  Form: {
    screen: Form,
  },
  Convo: {
    screen: Convo,
  },
  Detail: {
    screen: Detail,
  },
  Doctors: {
    screen: Doctors,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
    },
  },
});

export default createAppContainer(HomeStack);
