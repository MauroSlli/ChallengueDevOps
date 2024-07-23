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
                    // Configura Git para la fusión
                    sh 'git config user.name "MauroSlli"'
                    sh 'git config user.email "maurosacarelli@gmail.com"'
                    
                    // Cambia a la rama principal
                    sh 'git checkout master'
                    
                    // Fusiona la rama actual a la rama principal
                    sh 'git merge modifications'
                    
                    // Realiza un push de los cambios fusionados
                    sh 'git push origin master'
                }
            }
        }
    }    
}

