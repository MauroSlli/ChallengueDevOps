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
                // Clona la rama específica
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE'){
                git 'REPO_URL'
                 }
                git branch: 'modifications', url: "${env.REPO_URL}", credentialsId: "${env.GIT_CREDENTIALS_ID}"
            }
        }
        
        stage('Build') {
            steps {
                // Comandos para construir tu proyecto
                echo 'Construyendo el proyecto...'
            }
        }
        
        stage('Merge to Main') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "${env.GIT_CREDENTIALS_ID}", passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                        sh 'git config credential.helper store'
                        sh "echo 'https://${env.GIT_USERNAME}:${env.GIT_PASSWORD}@github.com' > ~/.git-credentials"
                        sh 'git checkout master'
                        sh 'git merge modifications'
                        sh 'git push origin master'
                        sh 'rm ~/.git-credentials'
                    }
                }
            }
        }
    }    
}

