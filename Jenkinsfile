pipeline{
    agent {
        label "172.16.10.51"
    }
    
    tools {
        nodejs "node"
    }

    stages {
        stage('prep-server'){
            steps{
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                sh 'node ./tests/test.js'
            }
        }
    }
}