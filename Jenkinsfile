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
                } catch (Exception e){ echo "error ignorado"}
}
             
            }
        }
        
        stage('Build') {
            steps {
                
                echo 'Ejecutando codigo del build'
            }
        }
        stage('logs del dummy') {
          step{
            sh "cat dummy.txt"
          }
        }
        
        stage('Deploy to GitHub pages') {
            steps {
                withCredentials([string(credentialsId: '${env.GIT_CREDENTIALS_ID}', passwordVariable: 'GIT_TOKEN', usernameVariable: 'GIT_USER')]) {
                    sh """
                    git config --global user.email "maurosacarelli@gmail.com"
                    git config --global user.name "${GIT_USER}"
                    git checkout -b gh-pages
                    git add .
                    git commit -m "Deploy to GitHub Pages"
                    git push --force https://${GIT_TOKEN}@github.com/${GIT_USER}/ChallengueDevOps.git gh-pages
                    """
                }
        }
    }    
}
}
