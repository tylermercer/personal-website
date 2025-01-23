export default function logCommitHash() {
    console.log(`Version: ${(import.meta.env.PUBLIC_COMMIT_HASH)?.substring(0, 8) ?? '[no version]'}`)
}