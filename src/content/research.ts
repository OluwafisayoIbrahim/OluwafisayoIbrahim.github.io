import type { ResearchInterest, ResearchProject } from "@/types/research";

export const researchInterests: readonly ResearchInterest[] = [
  {
    id: "empirical-software-engineering",
    title: "Empirical Software Engineering",
    description:
      "I am interested in using data, experimentation, and empirical evidence to study how software is developed, tested, and maintained, with a focus on software quality, reliability, maintainability, CI/CD, mining software repositories, software analytics, and improving release pipelines.",
  },
  {
    id: "ai-and-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "I am interested in developing and evaluating machine learning models, particularly deep learning, natural language processing, and large language models, with a focus on model generalisation, reliability, and solving practical problems across different domains.",
  },
];
export const researchProjects: readonly ResearchProject[] = [
  {
    slug: "solar-ann-matlab",
    title: "Solar Power Prediction Using Artificial Neural Networks",
    summary:
      "An undergraduate research project involving solar-panel power output, using field measurements and a feedforward neural network built in MATLAB.",
    topics: ["Undergraduate research", "Solar energy", "ANN"],
    tools: [
      "MATLAB",
      "Neural Network Toolbox",
      "Levenberg–Marquardt",
      "Pyranometers",
      "Multimeters",
    ],
    sections: [
      {
        id: "field-measurements",
        title: "Measuring solar-panel performance",
        paragraphs: [
          "Solar-panel output varies as sunlight and operating conditions change. This study investigated how an artificial neural network could model the relationship between those measurements and electrical power output.",
          "The dataset was collected at Olabisi Onabanjo University over 21 days. Nine readings were taken each day between 8 am and 4 pm, giving 189 observations. Measurements included solar irradiance, temperature, humidity, current, voltage and power. Pyranometers and multimeters were used alongside the solar panels to record the physical and electrical conditions.",
        ],
      },
      {
        id: "matlab-network",
        title: "Building the neural network",
        paragraphs: [
          "The model used MATLAB's fitnet(10): a feedforward network with one hidden layer containing ten neurons. A tansig activation in the hidden layer allowed the network to represent nonlinear relationships, while a purelin output produced a continuous estimate of power.",
          "The network was trained with the Levenberg–Marquardt algorithm (trainlm), which adjusts the weights and biases to reduce prediction error. Irradiance, temperature, humidity, current and voltage formed the input variables; panel power was the prediction target.",
        ],
      },
      {
        id: "matlab-performance",
        title: "Interpreting the predictions",
        paragraphs: [
          "Predicted and measured power were compared using mean absolute error (MAE), root mean squared error (RMSE), mean absolute percentage error (MAPE) and the coefficient of determination (R²). Together, these describe the typical error, the effect of larger errors, relative error and the amount of variation explained.",
          "The input set includes current and voltage, whose product already approximates electrical power. The experiment therefore concerns estimating measured output with electrical information available. Its accuracy should not be read as evidence of forecasting future solar generation from weather alone. The small, single-site dataset also limits conclusions about other locations and seasons.",
        ],
      },
      {
        id: "matlab-documentation",
        title: "Research output",
        paragraphs: [
          "The study was documented in my undergraduate dissertation and an SSRN preprint. The repository provides the original project materials, and the preprint is linked below as a preprint rather than a peer-reviewed journal publication.",
        ],
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/OluwafisayoIbrahim/ANN-Forecasting-for-Solar-Power",
      },
    ],
    publicationIds: ["solar-ann-preprint"],
    featured: true,
    results: [],
    tracks: [],
  },
  {
    slug: "solar-python-reevaluation",
    title: "Solar Power Prediction in Python",
    summary:
      "A Python research project modelling solar-panel output with machine learning, comparing electrical and weather-based inputs through reproducible experiments and an interactive prediction app.",
    topics: ["Independent research", "Machine learning", "Solar energy"],
    tools: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow / Keras",
      "PyTorch",
      "Matplotlib",
      "Streamlit",
      "pytest",
      "GitHub Actions",
    ],
    sections: [
      {
        id: "python-data",
        title: "The prediction problem",
        paragraphs: [
          "This project models how a solar panel's power output changes under measured operating conditions. It uses 189 observations collected across 21 measurement days, with irradiance, temperature, humidity, current, voltage and power recorded at regular daytime intervals.",
          "Two input configurations answer different practical questions. The electrical-input configuration uses irradiance, current, voltage, temperature and humidity. The weather-only configuration uses irradiance, temperature, humidity and hour of day, allowing power to be estimated without measuring current or voltage. Both estimate output under observed conditions; neither is a forecast of future weather.",
        ],
      },
      {
        id: "python-models",
        title: "Models and training",
        paragraphs: [
          "Linear regression provides a simple learned baseline, while current × voltage supplies a physical baseline for the electrical-input configuration. The neural-network experiments use scikit-learn, TensorFlow/Keras and PyTorch, so performance can be examined across different implementations.",
          "The untuned scikit-learn MLP has ten hidden units, tanh activation and the L-BFGS solver. A tuned version searches hidden-layer sizes of three or ten units and L2 regularisation strengths of 0.1, 1 and 10. TensorFlow and PyTorch experiments compare a single ten-unit hidden layer with a two-layer network of sixteen and eight units, using tanh hidden activations, a linear output and Adam optimisation. Scaling and training settings are recorded with the experiment artifacts.",
        ],
      },
      {
        id: "python-validation",
        title: "Testing on unseen measurement days",
        paragraphs: [
          "The outer validation uses seven grouped folds, holding out three whole days at a time. Keeping each day together prevents neighbouring readings from that day appearing in both the training and test sets. Model selection uses three inner grouped folds drawn only from the outer training days.",
          "Experiments use seeds 0, 1 and 2 to examine sensitivity to initialisation. Each observation receives an out-of-fold prediction while its day is held out. MAE, RMSE, MAPE and R² are calculated from these pooled predictions for each seed, rather than averaging unstable R² values from small test folds.",
          "The experiment records prediction errors, model comparisons and daily output profiles. Electrical-input accuracy must be interpreted alongside the current × voltage baseline. Weather-only results address a harder task, and the limited number of days does not establish performance across climates or seasons.",
        ],
      },
      {
        id: "python-results",
        title: "What the experiments show",
        paragraphs: [
          "For the weather-only task, the tuned scikit-learn ANN recorded a mean MAE of 11.965 W, RMSE of 15.089 W, MAPE of 4.786% and R² of 0.703 across the three seeds. Linear regression recorded MAE of 12.165 W and R² of 0.701, so the tuned network's advantage over that simple baseline was modest.",
          "In the matched S2 framework comparison, weather-only MAE was 12.131 W for TensorFlow and 11.981 W for PyTorch. These results describe this dataset and protocol, rather than establishing a general framework ranking. The repository retains historical runs separately, including training-budget and convergence notes, so results can be traced to their exact experiment.",
        ],
      },
      {
        id: "python-app",
        title: "Exploring the models in the app",
        paragraphs: [
          "The Streamlit application brings the dataset, experiment results and model behaviour together. Visitors can explore measurements and saved results, inspect models, or enter a single reading to obtain a power estimate.",
          "The prediction workspace also accepts CSV and Excel uploads, supports measured-versus-predicted comparisons and downloadable predictions, and adapts the required input columns to the selected model. Saved-model prediction and training a fresh session model are separate actions. The repository includes experiment artifacts, tests and automated checks to make the work easier to inspect and reproduce.",
        ],
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/OluwafisayoIbrahim/solar-power-prediction-python",
      },
      {
        label: "Live demo",
        href: "https://solar-power-prediction-python.streamlit.app/",
      },
    ],
    publicationIds: [],
    featured: true,
    results: [],
    tracks: [],
  },
  {
    slug: "duplicate-bug-report-retrieval",
    title: "Duplicate Bug Report Detection",
    summary:
      "An ongoing NLP project that ranks earlier bug reports by relevance, helping developers find reports that may describe the same underlying issue.",
    topics: ["Work in progress", "NLP", "Software engineering"],
    tools: [
      "Python",
      "Jupyter",
      "TF-IDF",
      "Sentence-BERT",
      "Cosine similarity",
    ],
    sections: [
      {
        id: "bug-problem",
        title: "Finding the same bug in different words",
        paragraphs: [
          "Different users can report the same failure with different titles, descriptions and levels of detail. Searching only for an exact phrase can miss a useful earlier report. This project treats duplicate detection as a retrieval problem: given a report, produce a ranked list of earlier candidates for a developer to review.",
          "The aim is to support investigation rather than automatically close reports. A high-ranked candidate can provide earlier discussion, reproduction steps or an existing resolution, but a developer still needs to decide whether the underlying issue is the same.",
        ],
      },
      {
        id: "bug-method",
        title: "From report text to ranked candidates",
        paragraphs: [
          "The work includes data preparation for Eclipse Platform reports and the IssuesDupes dataset. Report text and duplicate relationships are prepared for retrieval experiments, with exploratory notebooks used to inspect the data before comparing approaches.",
          "A TF-IDF baseline represents reports through weighted terms, giving more emphasis to distinctive words than to common ones. Cosine similarity ranks candidate reports by the similarity of these representations.",
          "Sentence-BERT experiments represent report text as dense vectors, making it possible to compare reports whose meanings are similar even when their wording differs. The repository also contains training-data preparation and fine-tuning notebooks for investigating how task-specific examples affect retrieval.",
        ],
      },
      {
        id: "bug-evaluation",
        title: "Assessing retrieval quality",
        paragraphs: [
          "Recall@1, Recall@5 and Recall@10 measure how often a known duplicate is retrieved near the top of the list. Mean reciprocal rank (MRR) additionally rewards methods that place the first relevant result earlier. These measures reflect the number of candidates a developer may need to inspect.",
          "Baseline and training experiments are recorded in the project notebooks and result files. The investigation is ongoing; these experiments are not a claim of a finished production system or a universally best duplicate-detection method.",
        ],
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/OluwafisayoIbrahim/duplicate-bug-report-detection",
      },
    ],
    publicationIds: [],
    featured: true,
    results: [],
    tracks: [],
  },
];
