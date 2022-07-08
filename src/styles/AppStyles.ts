import { StyleSheet } from 'react-native';

export const MainHeaderStyles = StyleSheet.create({
  headerContainer: {
    margin: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  headerContainerDesktop: {
    borderBottomWidth: 0,
    justifyContent: 'flex-start',
    maxWidth: 1140,
    marginBottom: 0,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
  },
  headerContainerDark: {
    borderBottomWidth: 0,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Montserrat_800ExtraBold',
  },
  DesktopTitle: {
    fontSize: 50,
    fontFamily: 'Montserrat_800ExtraBold',
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    width: 48,
    height: 48,
  },
});

export const DarkModeSwitchStyles = StyleSheet.create({
  link: {
    margin: 16,
    padding: 16,
    borderRadius: 4,
  },
  linkText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  },
  pressable: {
    flex: 1,
    justifyContent: 'center',
    margin: 16,
  },
  lightPressable: {
    backgroundColor: '#000',
  },
  darkPressable: {
    backgroundColor: '#fff',
  },
  lightText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export const ThemedComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '92%',
    alignSelf: 'center',
    padding: '5%',
    borderColor: '#F0EBFF',
    marginTop: '4%',
    marginBottom: '4%',
  },
  lightContainerDesktop: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    padding: 32,
    borderColor: '#F0EBFF',
    marginTop: '4%',
    marginBottom: '4%',
  },
  lightView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    height: 'auto',
    width: '92%',
    alignSelf: 'center',
    padding: '5%',
    borderColor: '#383838',
    marginTop: '4%',
    marginBottom: '4%',
  },
  darkContainerDesktop: {
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    padding: 32,
    borderColor: '#383838',
    marginTop: '4%',
    marginBottom: '4%',
  },
  darkView: {
    backgroundColor: '#1F1F1F',
    flex: 1,
  },
  safeContainer: {
    paddingTop: '15%',
  },
  lightThemeText: {
    fontSize: 16,
    color: '#242C40',
  },
  darkThemeText: {
    fontSize: 16,
    color: '#ffffff',
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'Montserrat_800ExtraBold',
  },
  subHeaderText: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  },
  darkModalDesktop: {
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    borderColor: '#383838',
    marginBottom: '4%',
    left: 320,
    maxWidth: 1140,
    marginLeft: -320,
    marginTop: '10vh',
  },
  lightModalDesktop: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    borderColor: '#F0EBFF',
    marginBottom: '4%',
    left: 320,
    maxWidth: 1140,
    marginLeft: -320,
    marginTop: '10vh',
  },
  lightModal: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  darkModal: {
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderColor: '#383838',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: 300,
    margin: 'auto',
    padding: 30,
    width: 300,
  },
});

export const ScreenStyles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  containerMain: {
    width: '100%',
    maxWidth: 1140,
    paddingRight: 16,
    paddingLeft: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 32,
  },
  containerCard: {
    width: '100%',
    maxWidth: 1140,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerMainMobile: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
  },
  containerStart: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat_800ExtraBold',
    paddingBottom: 16,
    maxWidth: '50%',
  },
  cardImage: {
    width: '50%',
    height: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat_800ExtraBold',
    paddingBottom: 24,
    textAlign: 'center',
    justifyContent: 'center',
  },
  columnContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
  },
  mobileTwoButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,
  },
  solidButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#E5002C',
    borderRadius: 8,
    flex: 1,
    flexGrow: 1,
    borderWidth: 2,
    borderColor: '#E5002C',
    height: 58,
    maxHeight: 58,
  },
  nonFlexButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#E5002C',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E5002C',
    height: 58,
    maxHeight: 58,
  },
  outLineButton: {
    marginTop: 16,
    padding: 16,
    borderColor: '#E5002C',
    borderWidth: 2,
    borderRadius: 8,
    flex: 1,
    flexGrow: 1,
    height: 58,
    maxHeight: 58,
  },
  widthHalf: {
    width: '48%',
  },
  actionBar: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    zIndex: -1,
    paddingBottom: 32,
    width: '100%',
  },
  buttonSmall: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#E5002C',
    borderRadius: 4,
    width: '44%',
  },
  button: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#E5002C',
    borderRadius: 4,
    width: '100%',
  },
  linkURL: {
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    color: '#E5002C',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  linkText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    color: '#FFFFFF',
  },
  linkTextPrimary: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    color: '#E5002C',
  },
  image: {
    flexBasis: 600,
    width: '100%',
    flex: 3,
    flexGrow: 3,
    height: 800,
    maxHeight: '80%',
  },
  imageMobile: {
    flexBasis: 600,
    width: '100%',
    flex: 3,
    flexGrow: 3,
    height: 400,
    maxHeight: '40%',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const ContainerStyles = StyleSheet.create({
  BottomScreenButtonContainer: {
    top: 420,
    width: '92%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export const Basic = StyleSheet.create({
  appLinkModal: {
    height: 500,
  },
  button: {
    borderRadius: 4,
    padding: 16,
    elevation: 2,
    marginTop: 16,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  modalText: {
    padding: 60,
    textAlign: 'center',
  },
});

export const MobileFontStyles = StyleSheet.create({
  h1: {
    fontSize: 25,
    fontFamily: 'Montserrat_800ExtraBold',
    paddingBottom: 16,
  },
  h2: {
    fontSize: 18,
    fontFamily: 'Montserrat_800ExtraBold',
    paddingBottom: 16,
  },
  h3: {
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
  },
  p: {
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
});

export const DesktopFontStyles = StyleSheet.create({
  h1: {
    fontSize: 50,
    fontFamily: 'Montserrat_800ExtraBold',
    paddingBottom: 16,
  },
  h2: {
    fontSize: 20,
    fontFamily: 'Montserrat_800ExtraBold',
    paddingBottom: 16,
  },
  h3: {
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
  },
  p: {
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
});
