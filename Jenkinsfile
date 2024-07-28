pipeline {
    agent any
    
    environment {
        // Define variables de entorno, como las credenciales si es necesario
        GIT_CREDENTIALS_ID = 'credentialGitHub'
        REPO_URL = 'https://github.com/MauroSlli/ChallengueDevOps.git'
    }

    stages {
    
        stage('Checkout Branch') {
            steps {
              script{
                try{   
                  git branch: 'master', url: '${env.REPO_URL}', credentialsId: '${env.GIT_CREDENTIALS_ID}'
                } catch (Exception e){ echo "error ignorado" }
              }
             
            }
        }
        
        stage('Build') {
            steps {
                
                echo 'Ejecutando codigo del build'
            }
        }
        stage('logs del dummy') {
          steps{
            sh "cat dummy.txt"
          }
        }
        
        stage('Deploy to GitHub pages') {
            steps {
                withCredentials([string(credentialsId: '${env.GIT_CREDENTIALS_ID}', variable: 'GITHUB_TOKEN')]) {
                    sh '''
                    echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" > ~/.npmrc
                    npm publish --registry=https://npm.pkg.github.com
                    '''
                }
        }
    }    
}
}
