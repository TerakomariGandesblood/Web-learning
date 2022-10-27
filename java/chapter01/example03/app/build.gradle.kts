plugins {
    application
    checkstyle
    pmd
    jacoco
}

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

// https://github.com/checkstyle/checkstyle
checkstyle {
    toolVersion = "10.3.4"
    isIgnoreFailures = false
}

// https://github.com/pmd/pmd
pmd {
    toolVersion = "6.50.0"
    isConsoleOutput = true
}

// https://github.com/jacoco/jacoco
jacoco { toolVersion = "0.8.8" }

repositories { mavenCentral() }

dependencies {
    // https://github.com/junit-team/junit5
    testImplementation("org.junit.jupiter:junit-jupiter:5.9.1")

    // https://github.com/google/guava
    implementation("com.google.guava:guava:31.1-jre")
}

application { mainClass.set("example.App") }

tasks.named<Test>("test") { useJUnitPlatform() }

tasks.test { finalizedBy(tasks.jacocoTestReport) }

tasks.jacocoTestReport { dependsOn(tasks.test) }
