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
                bat 'npm install'
            }
        }
        stage('Test'){
            steps{
                bat 'node ./tests/test.js'
            }
        }
    }
}
