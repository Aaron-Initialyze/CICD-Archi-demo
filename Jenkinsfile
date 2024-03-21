pipeline{
    agent any

    parameters{
        //string(name: 'SPEC')
        choice(name: 'browser', choices:['chrome','edge', 'firefox'], description:"normal descrip")
    }
    options{
        ansiColor('xterm')
    }
    stages{
        stage('Building'){
            steps{
                echo "Building the app"
            }
        }
        stage('Testing'){
            steps{
                bat '''cd Cy_Type
                        npm i'''
                bat 'cd Cy_Type'
                echo 'Hi ${browser}, welcome'
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploying the app"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'Cy_Type/cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}
