pipeline {
    agent any
    
    environment {
        GIT_CREDENTIALS_ID = 'credentialGitHub'
        REPO_URL = 'https://github.com/MauroSlli/ChallengueDevOps.git'
    }

    stages {
    
        stage('Checkout Branch') {
            steps {
              try{
                git branch: 'master', url: "${env.REPO_URL}", credentialsId: "${env.GIT_CREDENTIALS_ID}"
              }catch(Exception e){ echo "error ignorado" }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Construyendo el proyecto...'
            }
        }
        
        stage('contenido dummy.txt'){
        sh 'cat dummy.txt'
        }
        
        stage('Update artifact') {
            steps {
                
            }
        }
    }    
}

