import { StyleSheet } from 'react-native';
import GlobalStyles from './GlobalStyles';


export default CommonStyles = StyleSheet.create({

  textWhite: {
    fontSize: 16,
    color: "white",
    fontFamily: GlobalStyles.fontSet.Regular,

  },
  textBack: {
    fontSize: 16,
    color: GlobalStyles.colorSet.heroBack,
    fontFamily: GlobalStyles.fontSet.Regular,
  },
  textHero: {
    fontSize: 16,
    color: GlobalStyles.colorSet.hero,
    fontFamily: GlobalStyles.fontSet.Regular,
  },
  textBackBold: {
    fontSize: 16,
    color: GlobalStyles.colorSet.heroBack,
    fontFamily: GlobalStyles.fontSet.Bold,
  },

  titleThinWhite: {
    fontSize: 48,
    color: "white",
    fontFamily: GlobalStyles.fontSet.Thin,
  },
  titleWhite: {
    fontFamily: GlobalStyles.fontSet.Bold,
    color: "white",
    fontSize: 22,
  },
  titleHero: {
    fontFamily: GlobalStyles.fontSet.Bold,
    color: GlobalStyles.colorSet.hero,
    fontSize: 25,
  },
  titleBack: {
    fontFamily: GlobalStyles.fontSet.Bold,
    color: GlobalStyles.colorSet.heroBack,
    fontSize: 22,
  },
  linkHero: {
    fontSize: 16,
    color: GlobalStyles.colorSet.hero,
    fontFamily: GlobalStyles.fontSet.Regular,
    textDecorationLine: 'underline',
  },

  viewHero: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colorSet.hero,
  },
  viewBack: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colorSet.heroBack,
  },
  viewWhite: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  viewCard: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  imageFull: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%"

  },

  imageTop: {

    resizeMode: "stretch",
    position: "absolute",
    width: "100%",
    top: 0

  },

  imageBottom: {

    resizeMode: "stretch",
    position: "absolute",
    width: "100%",
    bottom: 0

  }



});