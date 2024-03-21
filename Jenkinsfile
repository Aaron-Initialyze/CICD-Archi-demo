pipeline{
    agent any

    parameters{
        choice(name: 'browser', choices:['chrome','edge', 'firefox'], description:"normal descrip")
        //string(name: 'SPEC')
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
                bat '''cd Cy_Type
                npx cypress run --browser %browser%'''
            }
            post{
                always{
                    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'Cy_Type/cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])            
                }
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
            emailext (attachLog: true, attachmentsPattern: '**/index.html', body: 'Test demo', compressLog: true, replyTo: 'aaron.godinho96@gmail.com', subject: 'Report from the jenkins pipepline build', to: 'agodinho@initialyze.com')  
        }
    }
}
