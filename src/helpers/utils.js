const handleImageError = (e) => {
  var src = "/default-placeholder.png";
  e.target.src = src;
};

const getClassifierCode = (classifierName) => {
  var classifier_code;
  switch (classifierName) {
    case "Logistic Regression":
      classifier_code = "lr";
      break;
    case "SVM":
      classifier_code = "svm";
      break;
    case "Random Forest":
      classifier_code = "rf";
      break;
    case "XGBoost":
      classifier_code = "xgb";
      break;
    case "Perceptron Neural Network":
      classifier_code = "pnn";
      break;
    default:
      classifier_code = "lr";
      break;
  }
  return classifier_code;
};

const getFeatureExtractionCode = (featureExtractionName) => {
  var feature_extraction_code;
  switch (featureExtractionName) {
    case "TFIDF":
      feature_extraction_code = "tfidf";
      break;
    case "GloVe":
      feature_extraction_code = "glove";
      break;
    case "RoBERTa":
      feature_extraction_code = "roberta";
      break;
    default:
      feature_extraction_code = "tfidf";
      break;
  }
  return feature_extraction_code;
};

export { handleImageError, getClassifierCode, getFeatureExtractionCode };
