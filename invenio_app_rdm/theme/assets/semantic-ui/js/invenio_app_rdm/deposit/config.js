// This file is part of InvenioRDM
// Copyright (C) 2025 CERN.
//
// Invenio APP RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.
import { i18next } from "@translations/invenio_app_rdm/i18next";

const depositFormSectionsConfig = {
  "files-section": ["files.enabled", "files.entries"],
  "basic-information-section": [
    "pids.doi",
    "metadata.resource_type",
    "metadata.title",
    "metadata.additional_titles",
    "metadata.creators",
    "metadata.contributors",
    "metadata.description",
    "metadata.additional_descriptions",
    "metadata.rights",
    "metadata.publication_date",
    "metadata.publisher",
  ],
  "recommended-information-section": [
    "metadata.subjects",
    "metadata.dates",
    "metadata.version",
    "metadata.languages",
  ],
  "funding-section": ["metadata.funding"],
  "related-works-section": ["metadata.related_identifiers"],
  "alternate-identifiers-section": ["metadata.identifiers"],
  "visibility-section": ["access.files", "access.embargo.until"],
};

const severityChecksConfig = {
  info: {
    label: i18next.t("Recommendation"),
    description: i18next.t("This check is recommended but not mandatory."),
  },
  error: {
    label: i18next.t("Error"),
    description: i18next.t(
      "This check indicates a critical issue that must be addressed."
    ),
  },
};

export { depositFormSectionsConfig, severityChecksConfig };
