var questionAnswers = [];


function getTextOfButton(buttonId) {
  if(buttonId.match(/yes/i)){
    return 'Yes';
  }
  if(buttonId.match(/no/i)){
    return 'No';
  }
  if(buttonId.match(/\b2s\b/)){
    return 'Two Sample';
  }
  if(buttonId.match(/\b2pluss\b/)){
    return 'More than 2 Samples';
  }
  if(buttonId.match(/\b1\b/)){
    return 'One Variable';
  }
  if(buttonId.match(/\b2\b/)){
    return 'Two Variables';
  }
  if(buttonId.match(/\b2plus\b/)){
    return 'More than 2 variables';
  }
  if(buttonId.match(/\bassoci\b/)){
    return 'Association';
  }
  if(buttonId.match(/\brepro\b/)){
    return 'Reproducibility';
  }
  if(buttonId.match(/\bconti\b/)){
    return 'Continuous';
  }
  if(buttonId.match(/\bbinary\b/)){
    return 'Binary';
  }
  if(buttonId.match(/\bone\b/)){
    return 'One';
  }
  if(buttonId.match(/\boneplus\b/)){
    return 'More than one';
  }
}

function nextQuestion(option) {
  var question = document.getElementById('question');
  var questionContainer = document.getElementById('questionContainer');
  var currentQuestion = question.innerText;
  var answer = getTextOfButton(option); // Get the text of the button
  questionAnswers.push({ question: currentQuestion, answer: answer });
  console.log(questionAnswers);
  switch (option) {
      case 'oneplus':
      questionContainer.innerHTML = `
          <h2 id="question">Are you interested in the relationship between the variables?</h2>
          <button onclick="nextQuestion('yes1')">Yes</button>
          <button onclick="nextQuestion('no1')">No</button>`;
      break;
      case 'one':
      questionContainer.innerHTML = `
      <h2 id="question">What kind of problem is it?</h2>
          <button onclick="nextQuestion('1s')">One sample</button>
          <button onclick="nextQuestion('2s')">Two sample</button>
          <button onclick="nextQuestion('2pluss')">More than 2 samples</button`;
      break;
      case '1s':
        questionContainer.innerHTML = `
          <h2 id="question">Is the underlying distribution normal or can CLT be assumed?</h2>
          <button onclick="nextQuestion('yes18')">Yes</button>
          <button onclick="nextQuestion('no18')">No</button>`;
      break;
      case 'yes18':
        questionContainer.innerHTML = `
          <h2 id="question">Inference concerning?</h2>
          <button onclick="nextQuestion('yes19')">Yes</button>
          <button onclick="nextQuestion('no19')">No</button>`;
      break;
      case 'yes19':
        questionContainer.innerHTML = `
          <h2 id="question">Known?</h2>
          <button onclick="nextQuestion('yes20')">Yes</button>
          <button onclick="nextQuestion('no20')">No</button>`;
      break;
      case 'yes20':
        displayTextAndConfetti("One Sample Z test",1000);
        questionContainer.innerHTML = '';
        break;
      case 'no20':
        displayTextAndConfetti("One Sample t test",1000);
        questionContainer.innerHTML = '';
        break;
      case 'no19':
        displayTextAndConfetti("One sample Chi square Test for variances",1000);
        questionContainer.innerHTML = '';
        break;
      case 'no18':
        questionContainer.innerHTML = `
          <h2 id="question">Is the underlying distribution binomial?</h2>
          <button onclick="nextQuestion('yes21')">Yes</button>
          <button onclick="nextQuestion('no21')">No</button>`;
      break;
      case 'yes21':
        displayTextAndConfetti("One sample binomial test",500)
        questionContainer.innerHTML = `
          <h2 id="question">Normal Approximation valid?</h2>
          <button onclick="nextQuestion('yes22')">Yes</button>
          <button onclick="nextQuestion('no22')">No</button>`;
      break;
      case 'yes22':
        displayTextAndConfetti("Normal Theory Methods",1000);
        questionContainer.innerHTML = '';
        break;
      case 'no22':
        displayTextAndConfetti("Exact Methods",1000);
        questionContainer.innerHTML='';
        break;
      case 'no21':
        questionContainer.innerHTML = `
          <h2 id="question">Underlying distribution is poisson?</h2>
          <button onclick="nextQuestion('yes23')">Yes</button>
          <button onclick="nextQuestion('no23')">No</button>`;
      break;
      case 'yes23':
        displayTextAndConfetti("One Sample Poisson Test",1000);
        questionContainer.innerHTML='';
        break;
      case 'no23':
        displayTextAndConfetti("Use another Underlying distribution or use non parametric methods",1000);
        questionContainer.innerHTML='';
        break;
      case '2s':
        questionContainer.innerHTML = `
          <h2 id="question">Underlying Distribution normal or can CLT be assumed?</h2>
          <button onclick="nextQuestion('yes24')">Yes</button>
          <button onclick="nextQuestion('no24')">No</button>`;
      break;
      case 'yes24':
        questionContainer.innerHTML = `
          <h2 id="question">Inference concerning means?</h2>
          <button onclick="nextQuestion('yes25')">Yes</button>
          <button onclick="nextQuestion('no25')">No</button>`;
      break;
      case 'yes25':
        questionContainer.innerHTML = `
          <h2 id="question">Are samples independent?</h2>
          <button onclick="nextQuestion('yes26')">Yes</button>
          <button onclick="nextQuestion('no26')">No</button>`;
      break;
      case 'yes26':
        questionContainer.innerHTML = `
          <h2 id="question">Are variances of two samples significantly different?</h2>
          <button onclick="nextQuestion('yes27')">Yes</button>
          <button onclick="nextQuestion('no27')">No</button>`;
      break;
      case 'yes27':
        displayTextAndConfetti("Use two sample t-test with unequal variances",1000);
        questionContainer.innerHTML='';
        break;
      case 'no27':
        displayTextAndConfetti("Use two sample t-test with equal variances",1000);
        questionContainer.innerHTML='';
        break;
      case 'no26':
        displayTextAndConfetti("Use Paired t-test",1000);
        questionContainer.innerHTML='';
        break;
      case 'no25':
        displayTextAndConfetti("Inference concerning Variance: Two sample F-test",1000)
        questionContainer.innerHTML='';
        break;
      case 'no24':
        questionContainer.innerHTML = `
          <h2 id="question">Underlying distribution normal?</h2>
          <button onclick="nextQuestion('yes28')">Yes</button>
          <button onclick="nextQuestion('no28')">No</button>`;
      break;
      case 'yes28':
        questionContainer.innerHTML = `
          <h2 id="question">Are samples independent?</h2>
          <button onclick="nextQuestion('yes29')">Yes</button>
          <button onclick="nextQuestion('no29')">No</button>`;
      break;
      case 'yes29':
        questionContainer.innerHTML = `
          <h2 id="question">Are all expected values>=5?</h2>
          <button onclick="nextQuestion('yes30')">Yes</button>
          <button onclick="nextQuestion('no30')">No</button>`;
      break;
      case 'yes30':
        questionContainer.innerHTML = `
          <h2 id="question">2x2 Contingency table?</h2>
          <button onclick="nextQuestion('yes32')">Yes</button>
          <button onclick="nextQuestion('no32')">No</button>`;
      break;
      case 'no32':
        questionContainer.innerHTML = `
          <h2 id="question">2xk Contingency table?</h2>
          <button onclick="nextQuestion('yes33')">Yes</button>
          <button onclick="nextQuestion('no33')">No</button>`;
          break;
      case 'no33':
        displayTextAndConfetti("Use Chi-Square test for RxC tables",1000);
        questionContainer.innerHTML='';
        break;
      case 'yes33':
        questionContainer.innerHTML = `
          <h2 id="question">Interested in a trend over k binomial proportions?</h2>
          <button onclick="nextQuestion('yes34')">Yes</button>
          <button onclick="nextQuestion('no34')">No</button>`;
          break;
      case 'yes34':
        displayTextAndConfetti("Use chi-square test for trend, if no confounding is present; or the Mantel-Haenszel method, if confounding is present",1000);
        questionContainer.innerHTML='';
        break;
      case 'no34':
        displayTextAndConfetti("Use chi-square test for heterogeneity  2xk contingency table",1000);
        questionContainer.innerHTML='';
        break;
      case 'yes32':
        displayTextAndConfetti("Use two-sample test for binomial proportins, or 2X2 contingency table methods if no confounding is present, or the Mantel-Haenszel method if confounding is present",1000);
        questionContainer.innerHTML='';
        break;
      case 'no30':
        displayTextAndConfetti("Fisher's Exact test",1000);
        questionContainer.innerHTML='';
        break;
      case 'no29':
        displayTextAndConfetti("McNemar's Test",1000);
        questionContainer.innerHTML='';
        break;
      case 'no28':
        questionContainer.innerHTML = `
          <h2 id="question">Person Time data?</h2>
          <button onclick="nextQuestion('yes3')">Yes</button>
          <button onclick="nextQuestion('no31')">No</button>`;
      break;
      case 'no31':
        displayTextAndConfetti("Use another underlying distribution or use non-parametric methods",1000);
        questionContainer.innerHTML='';
        break;
      case '2pluss':
        questionContainer.innerHTML = `
          <h2 id="question">Underlying distribution normal or can CLT be assumed?</h2>
          <button onclick="nextQuestion('yes35')">Yes</button>
          <button onclick="nextQuestion('no35')">No</button>`;
          break;
      case 'yes35':
        displayTextAndConfetti("One way ANOVA",1000);
        questionContainer.innerHTML='';
        break;
      case 'no35':
        questionContainer.innerHTML = `
          <h2 id="question">Categorical Data?</h2>
          <button onclick="nextQuestion('yes36')">Yes</button>
          <button onclick="nextQuestion('no36')">No</button>`;
          break;
      case 'yes36':
        displayTextAndConfetti("Use RxC contingency table methods",1000);
        questionContainer.innerHTML='';
        break;
      case 'no36':
        displayTextAndConfetti("Use another underlying distribution or non-parametric methods such as Kruskal Wallis",1000);
        questionContainer.innerHTML='';
        break;
      case 'yes1':
        questionContainer.innerHTML = `
          <h2 id="question">Are both the variables continuous?</h2>
          <button onclick="nextQuestion('yes9')">Yes</button>
          <button onclick="nextQuestion('no9')">No</button>`;
          break;
      case 'yes9':
        questionContainer.innerHTML = `
          <h2 id="question">Are you interested in predicting one variable from another?</h2>
          <button onclick="nextQuestion('yes10')">Yes</button>
          <button onclick="nextQuestion('no10')">No</button>`;
          break;
      case 'yes10':
        displayTextAndConfetti("Simple Linear Regression",1000);
        questionContainer.innerHTML='';
        break;
      case 'no10':
        questionContainer.innerHTML = `
          <h2 id="question">Are both the variables normal?</h2>
          <button onclick="nextQuestion('yes11')">Yes</button>
          <button onclick="nextQuestion('no11')">No</button>`;
          break;
      case 'yes11':
        displayTextAndConfetti("Pearson Correlation Methods",1000);
        questionContainer.innerHTML='';
        break;
      case 'no11':
        displayTextAndConfetti("Rank Correlation Methods",1000);
        questionContainer.innerHTML ='';
        break;
      case 'no9':
        questionContainer.innerHTML = `
          <h2 id="question">Is one variable continuous and one categorical?</h2>
          <button onclick="nextQuestion('yes12')">Yes</button>
          <button onclick="nextQuestion('no12')">No</button>`;
          break;
      case 'yes12':
        displayTextAndConfetti("ANOVA",500);
        questionContainer.innerHTML = `
          <h2 id="question">Number of ways in which the categorical variable can be classified?</h2>
          <button onclick="nextQuestion('1')">1</button>
          <button onclick="nextQuestion('2')">2</button>
          <button onclick="nextQuestion('2plus')">More than 2</button>`;
          break;
      case '1':
        questionContainer.innerHTML = `
        <h2 id="question">Is outcome variable normal or can CLT be assumed?</h2>
        <button onclick="nextQuestion('yes13')">Yes</button>
        <button onclick="nextQuestion('no13')">No</button>`;
        break;
      case 'yes13':
        questionContainer.innerHTML = `
        <h2 id="question">Other covariates to be controlled for?</h2>
        <button onclick="nextQuestion('yes14')">Yes</button>
        <button onclick="nextQuestion('no14')">No</button>`;
        break;
      case 'yes14':
        displayTextAndConfetti("One Way ANCOVA",1000);
        questionContainer.innerHTML='';
        break;
      case 'no14':
        displayTextAndConfetti("One Way ANOVA",1000);
        questionContainer.innerHTML='';
        break;
      case 'no13':
        displayTextAndConfetti("Non Parametric ANOVA: Kruskal Wallis",1000);
        questionContainer.innerHTML='';
        break;
      case '2':
        questionContainer.innerHTML = `
        <h2 id="question">Other covariates to be controlled for?</h2>
        <button onclick="nextQuestion('yes15')">Yes</button>
        <button onclick="nextQuestion('no15')">No</button>`;
        break;
      case 'yes15':
        displayTextAndConfetti("Two Way ANCOVA",1000);
        questionContainer.innerHTML='';
        break;
      case 'no15':
        displayTextAndConfetti("Two Way ANOVA",1000);
        questionContainer.innerHTML='';
        break;
      case '2plus':
        questionContainer.innerHTML = `
        <h2 id="question">Other covariates to be controlled for?</h2>
        <button onclick="nextQuestion('yes16')">Yes</button>
        <button onclick="nextQuestion('no16')">No</button>`;
        break;
      case 'yes16':
        displayTextAndConfetti("Higher Way ANCOVA",1000);
        questionContainer.innerHTML='';
        break;
      case 'no16':
        displayTextAndConfetti("Higher Way ANOVA",1000);
        questionContainer.innerHTML='';
        break;
      case 'no12':
        questionContainer.innerHTML = `
          <h2 id="question">Is the data Ordinal?</h2>
          <button onclick="nextQuestion('yes17')">Yes</button>
          <button onclick="nextQuestion('no17')">No</button>`;
      break;
      case 'yes17':
        displayTextAndConfetti("Rank-Correlation Methods",1000);
        questionContainer.innerHTML='';
        break;
      case 'no17':
        questionContainer.innerHTML = `
          <h2 id="question">Interested in test of association or reproducibility?</h2>
          <button onclick="nextQuestion('associ')">Association</button>
          <button onclick="nextQuestion('repro')">Reproducibility</button>`;
      break;
      case 'associ':
        displayTextAndConfetti("Use contingency table methods",1000);
        questionContainer.innerHTML ='';
        break;
      case 'repro':
        displayTextAndConfetti("Use Kappa Statistic",1000);
        questionContainer.innerHTML='';
        break;
      case 'no1':                
      questionContainer.innerHTML = `
          <h2 id="question">Is the outcome variable continous or binary?</h2>
          <button onclick="nextQuestion('conti')">Continuous</button>
          <button onclick="nextQuestion('binary')">Binary</button>`;
      break;
      case 'conti':
        displayTextAndConfetti("Multiple Regression Methods!",400)
        questionContainer.innerHTML = '';
        break;
      case 'binary':
        questionContainer.innerHTML = `
          <h2 id="question">Are time of events important?</h2>
          <button onclick="nextQuestion('yes3')">Yes</button>
          <button onclick="nextQuestion('no3')">No</button>`;
        break;
        case 'no3':
          displayTextAndConfetti("Multiple Logistic Regression Methods!",400)
          questionContainer.innerHTML = '';
          break;
        case 'yes3':
          displayTextAndConfetti("Survival Analysis",250)
          questionContainer.innerHTML = `
          <h2 id="question">Is it a one sample problem</h2>
          <button onclick="nextQuestion('yes4')">Yes</button>
          <button onclick="nextQuestion('no4')">No</button>`;
          break;
        case 'yes4':
          displayTextAndConfetti("One sample-test for Incidence rates",400)
          questionContainer.innerHTML = '';
          break;
        case 'no4':
          questionContainer.innerHTML = `
          <h2 id="question">Are the incident rates constant over time?</h2>
          <button onclick="nextQuestion('yes5')">Yes</button>
          <button onclick="nextQuestion('no5')">No</button>`;
          break;
        case 'yes5':
          questionContainer.innerHTML = `
          <h2 id="question">Is it a two sample problem?</h2>
          <button onclick="nextQuestion('yes6')">Yes</button>
          <button onclick="nextQuestion('no6')">No</button>`;
          break;
        case 'no5':
          questionContainer.innerHTML = `
          <h2 id="question">Interested in comparison of survival curves of two groups with limited control of variates?</h2>
          <button onclick="nextQuestion('yes7')">Yes</button>
          <button onclick="nextQuestion('no7')">No</button>`;
          break;
        case 'yes7':
          displayTextAndConfetti("Log Rank Test",800);
          questionContainer.innerHTML = '';
          break;
        case 'no7':
          questionContainer.innerHTML = `
          <h2 id="question">Willing to assume several curve comes from a weibul distribution?</h2>
          <button onclick="nextQuestion('yes8')">Yes</button>
          <button onclick="nextQuestion('no8')">No</button>`;
          break;
        case 'yes8':
          displayTextAndConfetti("Use parameter survival methods based on weibul distribution",1000)
          questionContainer.innerHTML = ' ';
          break;
        case 'no8':
          displayTextAndConfetti("Use Cox proportional hazards regression",800);
          questionContainer.innerHTML = '';
          break;
        case 'yes6':
          displayTextAndConfetti("Two-sample test for comparison of incidence rates, if no confounding is present;or methods for stratified person-time data, if confounding is present",1000)
          questionContainer.innerHTML = '';
          break;
        case 'no6':
          displayTextAndConfetti("Use Test of trend for incidence rates",800);
          questionContainer.innerHTML = '';
          break;
  }
  localStorage.setItem('questionContainerState', questionContainer.innerHTML);
  localStorage.setItem('questionAnswers', JSON.stringify(questionAnswers));
}

function displayTextAndConfetti(text,time) {
  questionAnswers.push({ question: "Test", answer: text });
  // Create a div to contain the text
  var textDiv = document.createElement('div');
  textDiv.textContent = text;
  textDiv.style.position = 'fixed';
  textDiv.style.top = '50%';
  textDiv.style.left = '50%';
  textDiv.style.transform = 'translate(-50%, -50%)';
  textDiv.style.zIndex = '1000';
  textDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  textDiv.style.padding = '20px';
  textDiv.style.borderRadius = '10px';
  textDiv.style.textAlign = 'center';
  textDiv.style.fontWeight = 'bold';

  // Append the div to the body
  document.body.appendChild(textDiv);

  // Trigger confetti effect
  var end = Date.now() + time*3;
  (function frame() {
      confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#bb0000', '#ff8800']
      });
      confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#bb0000', '#ff8800']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
        // textDiv.remove();
    } else {
      setTimeout(function() {
        textDiv.remove();
    }, time);
    }
  }());
}

function restoreQuestionContainerState() {
  var questionContainer = document.getElementById('questionContainer');
  var savedState = localStorage.getItem('questionContainerState');
  if (savedState) {
      questionContainer.innerHTML = savedState;
  }

  // Restore the state of questionAnswers array
  var savedAnswers = localStorage.getItem('questionAnswers');
  if (savedAnswers) {
      questionAnswers = JSON.parse(savedAnswers);
  }
}


function navigateToNewPage() {
  // Serialize the questionAnswers array to JSON and encode it
  var questionAnswersJSON = encodeURIComponent(JSON.stringify(questionAnswers));  
  // Create the URL with the data as a parameter
  var url = 'page2.html?questionAnswers=' + questionAnswersJSON;  
  // Redirect to the new page
  window.location.href = url;
}