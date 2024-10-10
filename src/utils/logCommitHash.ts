export default function logCommitHash() {
    console.log(`Version: ${import.meta.env.PUBLIC_COMMIT_HASH}`)
}