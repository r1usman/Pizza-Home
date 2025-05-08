pipeline {
    agent any

    stages {
        stage('Cleanup Docker') {
            steps {
                sh 'docker system prune -af' 

            }
        }
        
        stage('Fetch code ') {
            steps {
                sh 'git clone https://github.com/r1usman/upizza.git /var/lib/jenkins/DevOps/php/'
            }
        }

        stage('Build and Start Docker Compose') {
            steps {
                dir('/var/lib/jenkins/DevOps/php/') {
                    sh 'docker compose up -d'
                }
            }
        }
    }

}
