#!/usr/bin/env bash

# branch base
branchBase=""

# commit message
commitMessage=""
# Loop through all the positional parameters
while (("$#")); do
    case "$1" in
    --branch-base)
        branchBase="$2"
        shift 2
        ;;
    --message)
        commitMessage="$2"
        shift 2
        ;;
    --) # end argument parsing
        shift
        break
        ;;
    -* | --*=) # unsupported flags
        echo "Error: Unsupported flag $1" >&2
        exit 1
        ;;
    *) # preserve positional arguments
        PARAMS="$PARAMS $1"
        shift
        ;;
    esac
done

# Check if branch base and commit message are provided
if [[ -z "$branchBase" || -z "$commitMessage" ]]; then
    echo "Error: --branch-base and --message parameters are required"
    exit 1
fi

# current date time
now=$(date +"%Y-%m-%d %H:%M:%S")
# current date time without space, -, :
sanitisedNow=${now//[-: ]/}
# export now to github env vars
echo "CREATED_DATETIME=$now" >>"$GITHUB_ENV"

# create the branch base appended with current date time
branchName="$branchBase-$sanitisedNow"
# export branch name to github env vars
echo "BRANCH_NAME=$branchName" >>"$GITHUB_ENV"

# git config
git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config --global user.name "github-actions[bot]"

# stash current changes
git stash

# create a new branch
git checkout -b "$branchName"

# apply the stash
git stash pop

# add all the changes
git add .
# commit the changes
git commit -m "$commitMessage"

# push the changes
git push -u origin "$branchName"

# exit
exit 0
