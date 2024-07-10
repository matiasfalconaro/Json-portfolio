# Changelog
Format is loosely related to https://keepachangelog.com/en/1.1.0/.
Version numbers follow this convention:
- Version: `X.Y.Z`
  - `X` is the major version number, related to new functional designs and major UI changes.
  - `Y` is the minor version number, related to new functionalities and major refactors.
  - `Z` is the patch version number, for bug fixes corresponding to the base version.
- Tags:
  - [FUS]: Functionality, Usability, Supportability.
  - [MVP]: Minimum Viable Product
  - [QAI]: Quallity Assurance Issues
  - [RAS]: Reliability, Availability, and Serviceability (Stability)
  - [INF]: Information updates

## Comments
- (#XX) refers to issue number
- Actions:
  - Hotfix: fix a specific issue. They tend to have small impact over the complete project
  - Added: new feature
  - Fixed: fix issues that may span over the complete project.
  - Changed: existing features which have undergone some improvements.

## [v1.1.0] - [FUS] 2024-07-10
### Added
- Add PDF version download feature. (#18)
- Implement theme toogle. (#22)

### Changed
- Update portfolio data. (#24)

### Fixed

- Fix Type Assertion, Null Check and warning issues. (#27)
- Deploy website version 1.0.0 to Vercel. (#19)

## [v1.0.0] - [MVP] 2024-02-03
### Added
- Structure layout. (#1)
- Implement JSON schema. (#3)
- Layout styling. (#4)
- Implement Keyboard Manager. (#7)
- Finish remaining JSON and layout integration. (#9)
- Create CHANGELOG (#11)

### Changed
- Update README v1.0.0 (#13)
