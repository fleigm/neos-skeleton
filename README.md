# Setup
```
    export NEOS_PACKAGE_NAME="YourCompany.Site"
    export COMPOSER_PACKAGE_NAME="yourcompany\/site"
    mv DistributionPackages/Fleigm.Site DistributionPackages/${NEOS_PACKAGE_NAME}
    
    find . -type f -name 'composer.json' | xargs sed -i "s/fleigm\/site/${COMPOSER_PACKAGE_NAME}/g"
    find ./DistributionPackages/${NEOS_PACKAGE_NAME} -type f | xargs sed -i "s/Fleigm\.Site/${NEOS_PACKAGE_NAME}/g"
```
