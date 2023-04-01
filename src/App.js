/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import * as axios from "axios";
import { Toaster } from "react-hot-toast";

import Footer from "./components/Footer/Footer";
import PredictionResultPanel from "./components/PredictionResultPanel/PredictionResultPanel";
import ReviewDetectionSearch from "./components/ReviewDetection/ReviewDetectionSearch";

import useToast from "../src/helpers/hooks/use-toast";
import {getClassifierCode, getFeatureExtractionCode} from "../src/helpers/utils.js"

const App = () => {
  const toast = useToast();

  const baseUrl = "http://127.0.0.1:3001"//process.env.REACT_APP_BASE_URL || "http://localhost:3000";
  const flaskApiUrl = "http://127.0.0.1:5000/api/predictions/";

  const reviewText =
    "This is a sample review text, I wonder what the prediction models says about my review. Awesome";
  const featureExtractionTechniques = ["TFIDF", "GloVe", "RoBERTa"];
  const classifierTypes = [
    "Logistic Regression",
    "SVM",
    "Random Forest",
    "XGBoost",
    "Perceptron Neural Network",
  ];
  const defaultValues = {
    reviewText,
    featureExtractionTechnique: {
      value: "TFIDF",
    },
    classifierType: {
      value: "Logistic Regression",
    },
  };

  const [resultedPredictionData, setResultedPredictionData] =useState({});

  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

  useEffect(() => {
    const requestBody = {
      text: defaultValues.reviewText,
      featureExtractionTechnique: getFeatureExtractionCode(defaultValues.featureExtractionTechnique.value),
      classifier: getClassifierCode(defaultValues.classifierType.value),
    };

    axios
      .post(flaskApiUrl, requestBody
        ,{
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
      }
      )
      .then((response) => {
        const data = response?.data;
        if (data) {
          setIsInitialDataLoaded(true);
          setResultedPredictionData(data);

        }
      })
      .catch((err) => {
        setIsInitialDataLoaded(false);

        setTimeout(() => {
          toast.error(
            `Error: ${err?.response?.data?.message}. ${err?.response?.data?.error}`
          );
        }, 500);
      });
  }, []);

  const onReviewDetectionSearchResultsHandler = (results) => {
    setResultedPredictionData(results);
  };

  return (
    <div id="container">
      <div className="app-layout">
        <ReviewDetectionSearch
          featureExtractionTechniques={featureExtractionTechniques}
          classifierTypes={classifierTypes}
          defaultValuesReviewDetectionSearch={defaultValues}
          onPredictionResultPopulatReviewDetection={
            onReviewDetectionSearchResultsHandler
          }
        />
        {isInitialDataLoaded ? (
          <PredictionResultPanel
            reviewDetectionSearchResults={resultedPredictionData}
            baseUrl={baseUrl}
          />
        ) : null}
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
