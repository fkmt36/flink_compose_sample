```
mvn exec:java -Dexec.mainClass=org.apache.beam.examples.Main \
    -Pflink-runner \
    -Dexec.args="--runner=FlinkRunner \
      --host=mosquitto \
      --port=1883 \
      --inputTopic=test \
      --outputTopic=ans \
      --flinkMaster=<flink master url> \
      --filesToStage=target/word-count-beam-bundled-0.1.jar"
```