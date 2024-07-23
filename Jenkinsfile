pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde Git
                git 'https://github.com/MauroSlli/ChallengueDevOps.git'
            }
        }
    
        stage('Checkout Branch') {
            steps {
                // Clona la rama específica
                git branch: 'modifications'
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

