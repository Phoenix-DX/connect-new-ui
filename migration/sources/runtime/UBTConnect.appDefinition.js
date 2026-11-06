define("UBTConnect.appDefinition", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
return {
environmentKey: "143ff233-2884-4f1b-8a50-dc386fb3a50f",
environmentName: "Testing",
applicationKey: "b697c98f-cb67-4389-a0be-d92a069eb78f",
applicationName: "Connect 2.0",
userProviderName: "Users",
debugEnabled: true,
homeModuleName: "UBTConnect",
homeModuleKey: "0811ae64-4efe-4b74-a7b5-8236551a7004",
homeModuleControllerName: "UBTConnect.controller",
homeModuleLanguageResourcesName: "UBTConnect.languageResources",
defaultTransition: "SlideFromRight",
errorPageConfig: {
showExceptionStack: false,
messages: {
defaultMessage: null,
screenNotFound: null,
noDefaultScreen: null,
appOffline: null,
incompatibleProducer: null
},
extraMessage: null,
reloadLabel: null
},
isWeb: false,
personalArea: null,
showWatermark: false
};
});
