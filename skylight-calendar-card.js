// ============================================================================
// TRANSLATIONS
// ============================================================================
// To add a new language:
// 1. Add a new entry to the TRANSLATIONS object below
// 2. Set the locale (e.g., 'es-ES' for Spanish)
// 3. Copy the strings from 'en' and translate each value
// ============================================================================

const TRANSLATIONS = {
  en: {
    locale: 'en-US',
    strings: {
      defaultTitle: 'Family Calendar',
      addEvent: 'Add Event',
      today: 'Today',
      month: 'Month',
      week: 'Week',
      schedule: 'Schedule',
      calendars: 'Calendars',
      calendar: 'Calendar',
      eventTitle: 'Event Title',
      eventTitlePlaceholder: 'Team Meeting',
      allDayEvent: 'All-day event',
      recurring: 'Recurring',
      recurringEventOptions: 'Recurring options',
      recurrenceFrequency: 'Repeat',
      recurrenceEvery: 'Every',
      recurrenceIntervalSuffix: 'interval(s)',
      recurrenceEndsOn: 'Ends on',
      recurrenceCount: 'Occurrences (COUNT)',
      recurrenceWeekdays: 'Weekdays',
      recurrenceNoEndDate: 'No end date (optional)',
      recurrenceDaily: 'Daily',
      recurrenceWeekly: 'Weekly',
      recurrenceMonthly: 'Monthly',
      recurrenceYearly: 'Yearly',
      recurrenceNever: 'Never',
      recurrenceOn: 'On',
      recurrenceAfter: 'After',
      recurrenceOccurrences: 'occurrences',
      recurrenceSelectWeekday: 'Select at least one weekday for weekly recurring events',
      start: 'Start',
      end: 'End',
      startDate: 'Start Date',
      endDate: 'End Date',
      location: 'Location',
      locationPlaceholder: 'Conference Room A',
      description: 'Description',
      descriptionPlaceholder: 'Event details...',
      cancel: 'Cancel',
      createEvent: 'Create Event',
      creating: 'Creating...',
      editEvent: 'Edit Event',
      saveChanges: 'Save Changes',
      saving: 'Saving...',
      delete: 'Delete',
      deleting: 'Deleting...',
      deleteEventTitle: 'Delete Event',
      deleteRecurringEventTitle: 'Delete Recurring Event',
      deleteEventConfirm: 'Are you sure you want to delete "{title}"? This action cannot be undone.',
      deleteRecurringPrompt: '"{title}" is a recurring event. How would you like to delete it?',
      editRecurringEventTitle: 'Edit Recurring Event',
      editRecurringPrompt: '"{title}" is a recurring event. How would you like to edit it?',
      editThisOccurrence: 'Edit just this occurrence',
      editThisOccurrenceAndFuture: 'Edit this occurrence and all future occurrences',
      editEntireSeries: 'Edit the entire recurring series',
      deleteThisEventOnly: 'This event only',
      deleteThisOccurrence: 'Delete just this occurrence',
      deleteThisAndFutureEvents: 'This and future events',
      deleteThisOccurrenceAndFuture: 'Delete this occurrence and all future occurrences',
      deleteAllEvents: 'All events',
      deleteEntireSeries: 'Delete the entire recurring series',
      noEvents: 'No events',
      allDay: 'All Day',
      at: 'at',
      duration: 'Duration',
      attendees: 'Attendees',
      recurrence: 'Recurrence',
      recurringEvent: 'Recurring Event',
      unknownAttendee: 'Unknown',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendar Limitation:',
      googleCalendarLimitationBody: 'Editing events is not currently supported for Google Calendar through Home Assistant. You can delete events from here, but to edit please use the Google Calendar app or website.',
      cannotModifyTitle: 'ℹ️ Cannot Modify:',
      cannotModifyBody: 'This event is missing required information (UID) for editing or deletion. You may need to recreate it.',
      untitledEvent: 'Untitled Event',
      noWritableCalendars: 'No writable calendars available',
      eventTitleRequired: 'Event title is required',
      startEndDatesRequired: 'Start and end dates are required',
      endDateBeforeStart: 'End date cannot be before start date',
      startEndTimesRequired: 'Start and end times are required',
      endTimeBeforeStart: 'End time must be after start time',
      failedCreateEvent: 'Failed to create event. Please try again.',
      failedUpdateEvent: 'Failed to update event. Please try again.',
      failedDeleteEvent: 'Failed to delete event. Please try again.',
      homeAssistantUnavailable: 'Home Assistant not available',
      googleCalendarEditError: 'Google Calendar does not support editing events through Home Assistant. Please use the Google Calendar app or website.',
      missingUidError: 'This event is missing required information (UID) and cannot be edited.',
      calendarNoModifyError: 'This calendar does not support event modifications. Try creating a new event instead.',
      createEventServiceError: 'Failed to create event',
      deleteEventServiceError: 'Failed to delete event',
      updateEventServiceError: 'Failed to update event. The calendar may not support modifications.',
      durationHour: '{count} hour',
      durationHours: '{count} hours',
      durationMinute: '{count} minute',
      durationMinutes: '{count} minutes',
      moreEvents: '+{count} more'
    }
  },

  fr: {
    locale: 'fr-FR',
    strings: {
      defaultTitle: 'Calendrier familial',
      addEvent: 'Ajouter un événement',
      today: "Aujourd'hui",
      month: 'Mois',
      week: 'Semaine',
      schedule: 'Planning',
      calendars: 'Calendriers',
      calendar: 'Calendrier',
      eventTitle: "Titre de l'événement",
      eventTitlePlaceholder: "Réunion d'équipe",
      allDayEvent: 'Événement sur toute la journée',
      recurring: 'Récurrent',
      recurringEventOptions: 'Options de récurrence',
      recurrenceFrequency: 'Répéter',
      recurrenceEvery: 'Chaque',
      recurrenceIntervalSuffix: 'intervalle(s)',
      recurrenceEndsOn: 'Se termine le',
      recurrenceCount: 'Occurrences (COUNT)',
      recurrenceWeekdays: 'Jours de la semaine',
      recurrenceNoEndDate: 'Pas de date de fin (optionnel)',
      recurrenceDaily: 'Quotidien',
      recurrenceWeekly: 'Hebdomadaire',
      recurrenceMonthly: 'Mensuel',
      recurrenceYearly: 'Annuel',
      recurrenceNever: 'Jamais',
      recurrenceOn: 'Le',
      recurrenceAfter: 'Après',
      recurrenceOccurrences: 'occurrences',
      recurrenceSelectWeekday: 'Sélectionnez au moins un jour pour les événements hebdomadaires',
      start: 'Début',
      end: 'Fin',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      location: 'Lieu',
      locationPlaceholder: 'Salle de conférence A',
      description: 'Description',
      descriptionPlaceholder: "Détails de l'événement...",
      cancel: 'Annuler',
      createEvent: 'Créer un événement',
      creating: 'Création...',
      editEvent: "Modifier l'événement",
      saveChanges: 'Enregistrer les modifications',
      saving: 'Enregistrement...',
      delete: 'Supprimer',
      deleting: 'Suppression...',
      deleteEventTitle: "Supprimer l'événement",
      deleteRecurringEventTitle: "Supprimer l'événement récurrent",
      deleteEventConfirm: 'Voulez-vous vraiment supprimer "{title}" ? Cette action est irréversible.',
      deleteRecurringPrompt: '"{title}" est un événement récurrent. Comment souhaitez-vous le supprimer ?',
      editRecurringEventTitle: 'Modifier un événement récurrent',
      editRecurringPrompt: '"{title}" est un événement récurrent. Comment souhaitez-vous le modifier ?',
      editThisOccurrence: 'Modifier uniquement cette occurrence',
      editThisOccurrenceAndFuture: 'Modifier cette occurrence et toutes les occurrences futures',
      editEntireSeries: 'Modifier toute la série récurrente',
      deleteThisEventOnly: 'Cet événement uniquement',
      deleteThisOccurrence: 'Supprimer uniquement cette occurrence',
      deleteThisAndFutureEvents: 'Cet événement et les suivants',
      deleteThisOccurrenceAndFuture: 'Supprimer cette occurrence et toutes les occurrences futures',
      deleteAllEvents: 'Tous les événements',
      deleteEntireSeries: 'Supprimer toute la série récurrente',
      noEvents: 'Aucun événement',
      allDay: 'Toute la journée',
      at: 'à',
      duration: 'Durée',
      attendees: 'Participants',
      recurrence: 'Récurrence',
      recurringEvent: 'Événement récurrent',
      unknownAttendee: 'Inconnu',
      googleCalendarLimitationTitle: 'ℹ️ Limitation Google Agenda :',
      googleCalendarLimitationBody: "La modification des événements n'est pas prise en charge pour Google Agenda via Home Assistant. Vous pouvez supprimer des événements ici, mais pour les modifier veuillez utiliser l'application ou le site Google Agenda.",
      cannotModifyTitle: 'ℹ️ Impossible de modifier :',
      cannotModifyBody: 'Cet événement ne contient pas les informations requises (UID) pour être modifié ou supprimé. Vous devrez peut-être le recréer.',
      untitledEvent: 'Événement sans titre',
      noWritableCalendars: 'Aucun calendrier modifiable disponible',
      eventTitleRequired: "Le titre de l'événement est requis",
      startEndDatesRequired: 'Les dates de début et de fin sont requises',
      endDateBeforeStart: 'La date de fin ne peut pas être antérieure à la date de début',
      startEndTimesRequired: 'Les heures de début et de fin sont requises',
      endTimeBeforeStart: "L'heure de fin doit être après l'heure de début",
      failedCreateEvent: "Impossible de créer l'événement. Veuillez réessayer.",
      failedUpdateEvent: "Impossible de modifier l'événement. Veuillez réessayer.",
      failedDeleteEvent: "Impossible de supprimer l'événement. Veuillez réessayer.",
      homeAssistantUnavailable: "Home Assistant n'est pas disponible",
      googleCalendarEditError: "Google Agenda ne permet pas la modification des événements via Home Assistant. Veuillez utiliser l'application ou le site Google Agenda.",
      missingUidError: 'Cet événement ne contient pas les informations requises (UID) et ne peut pas être modifié.',
      calendarNoModifyError: "Ce calendrier ne prend pas en charge les modifications d'événements. Essayez plutôt de créer un nouvel événement.",
      createEventServiceError: "Impossible de créer l'événement",
      deleteEventServiceError: "Impossible de supprimer l'événement",
      updateEventServiceError: "Impossible de modifier l'événement. Le calendrier ne prend peut-être pas en charge les modifications.",
      durationHour: '{count} heure',
      durationHours: '{count} heures',
      durationMinute: '{count} minute',
      durationMinutes: '{count} minutes',
      moreEvents: '+{count} de plus'
    }
  },

  de: {
    locale: 'de-DE',
    strings: {
      defaultTitle: 'Familienkalender',
      addEvent: 'Termin hinzufügen',
      today: 'Heute',
      month: 'Monat',
      week: 'Woche',
      schedule: 'Zeitplan',
      calendars: 'Kalender',
      calendar: 'Kalender',
      eventTitle: 'Terminname',
      eventTitlePlaceholder: 'Team-Meeting',
      allDayEvent: 'Ganztägiges Ereignis',
      recurring: 'Wiederkehrend',
      recurringEventOptions: 'Wiederholungsoptionen',
      recurrenceFrequency: 'Wiederholen',
      recurrenceEvery: 'Alle',
      recurrenceIntervalSuffix: 'Intervall(e)',
      recurrenceEndsOn: 'Endet am',
      recurrenceCount: 'Anzahl (COUNT)',
      recurrenceWeekdays: 'Wochentage',
      recurrenceNoEndDate: 'Kein Enddatum (optional)',
      recurrenceDaily: 'Täglich',
      recurrenceWeekly: 'Wöchentlich',
      recurrenceMonthly: 'Monatlich',
      recurrenceYearly: 'Jährlich',
      recurrenceNever: 'Nie',
      recurrenceOn: 'Am',
      recurrenceAfter: 'Nach',
      recurrenceOccurrences: 'Vorkommen',
      recurrenceSelectWeekday: 'Wählen Sie mindestens einen Wochentag für wöchentliche Termine aus',
      start: 'Beginn',
      end: 'Ende',
      startDate: 'Startdatum',
      endDate: 'Enddatum',
      location: 'Ort',
      locationPlaceholder: 'Konferenzraum A',
      description: 'Beschreibung',
      descriptionPlaceholder: 'Ereignisdetails...',
      cancel: 'Abbrechen',
      createEvent: 'Termin erstellen',
      creating: 'Wird erstellt...',
      editEvent: 'Termin bearbeiten',
      saveChanges: 'Änderungen speichern',
      saving: 'Wird gespeichert...',
      delete: 'Löschen',
      deleting: 'Wird gelöscht...',
      deleteEventTitle: 'Termin löschen',
      deleteRecurringEventTitle: 'Wiederkehrenden Termin löschen',
      deleteEventConfirm: 'Möchten Sie "{title}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
      deleteRecurringPrompt: '"{title}" ist ein wiederkehrender Termin. Wie möchten Sie ihn löschen?',
      editRecurringEventTitle: 'Wiederkehrenden Termin bearbeiten',
      editRecurringPrompt: '"{title}" ist ein wiederkehrender Termin. Wie möchten Sie ihn bearbeiten?',
      editThisOccurrence: 'Nur dieses Vorkommen bearbeiten',
      editThisOccurrenceAndFuture: 'Dieses und alle zukünftigen Vorkommen bearbeiten',
      editEntireSeries: 'Die gesamte Serie bearbeiten',
      deleteThisEventOnly: 'Nur dieses Ereignis',
      deleteThisOccurrence: 'Nur dieses Vorkommen löschen',
      deleteThisAndFutureEvents: 'Dieses und zukünftige Ereignisse',
      deleteThisOccurrenceAndFuture: 'Dieses Vorkommen und alle zukünftigen Vorkommen löschen',
      deleteAllEvents: 'Alle Ereignisse',
      deleteEntireSeries: 'Die gesamte Serie löschen',
      noEvents: 'Keine Ereignisse',
      allDay: 'Ganztägig',
      at: 'um',
      duration: 'Dauer',
      attendees: 'Teilnehmende',
      recurrence: 'Wiederholung',
      recurringEvent: 'Wiederkehrender Termin',
      unknownAttendee: 'Unbekannt',
      googleCalendarLimitationTitle: 'ℹ️ Google-Kalender-Einschränkung:',
      googleCalendarLimitationBody: 'Das Bearbeiten von Terminen wird für Google Kalender in Home Assistant derzeit nicht unterstützt. Sie können Termine hier löschen, zum Bearbeiten nutzen Sie bitte die Google Kalender App oder Website.',
      cannotModifyTitle: 'ℹ️ Kann nicht bearbeitet werden:',
      cannotModifyBody: 'Diesem Ereignis fehlen erforderliche Informationen (UID) zum Bearbeiten oder Löschen. Möglicherweise müssen Sie es neu erstellen.',
      untitledEvent: 'Unbenannter Termin',
      noWritableCalendars: 'Keine beschreibbaren Kalender verfügbar',
      eventTitleRequired: 'Ein Terminname ist erforderlich',
      startEndDatesRequired: 'Start- und Enddatum sind erforderlich',
      endDateBeforeStart: 'Das Enddatum darf nicht vor dem Startdatum liegen',
      startEndTimesRequired: 'Start- und Endzeit sind erforderlich',
      endTimeBeforeStart: 'Die Endzeit muss nach der Startzeit liegen',
      failedCreateEvent: 'Termin konnte nicht erstellt werden. Bitte erneut versuchen.',
      failedUpdateEvent: 'Termin konnte nicht aktualisiert werden. Bitte erneut versuchen.',
      failedDeleteEvent: 'Termin konnte nicht gelöscht werden. Bitte erneut versuchen.',
      homeAssistantUnavailable: 'Home Assistant nicht verfügbar',
      googleCalendarEditError: 'Google Kalender unterstützt das Bearbeiten von Terminen über Home Assistant nicht. Bitte verwenden Sie die Google Kalender App oder Website.',
      missingUidError: 'Dieses Ereignis enthält keine erforderlichen Informationen (UID) und kann nicht bearbeitet werden.',
      calendarNoModifyError: 'Dieser Kalender unterstützt keine Terminänderungen. Bitte erstellen Sie stattdessen einen neuen Termin.',
      createEventServiceError: 'Termin konnte nicht erstellt werden',
      deleteEventServiceError: 'Termin konnte nicht gelöscht werden',
      updateEventServiceError: 'Termin konnte nicht aktualisiert werden. Der Kalender unterstützt möglicherweise keine Änderungen.',
      durationHour: '{count} Stunde',
      durationHours: '{count} Stunden',
      durationMinute: '{count} Minute',
      durationMinutes: '{count} Minuten',
      moreEvents: '+{count} mehr'
    }
  },

  nl: {
    locale: 'nl-NL',
    strings: {
      defaultTitle: 'Familie agenda',
      addEvent: 'Nieuwe afspraak',
      today: 'Vandaag',
      month: 'Maand',
      week: 'Week',
      schedule: 'Schema',
      calendars: "Agenda's",
      calendar: 'agenda',
      eventTitle: 'Afspraak onderwerp',
      eventTitlePlaceholder: 'Groepsafspraak',
      allDayEvent: 'Hele dag',
      recurring: 'Terugkerend',
      recurringEventOptions: 'terugkerend mogelijkheden',
      recurrenceFrequency: 'Herhaal',
      recurrenceEvery: 'Elke',
      recurrenceIntervalSuffix: 'herhalen elke',
      recurrenceEndsOn: 'Stop op',
      recurrenceCount: 'Gebeurtenissen (COUNT)',
      recurrenceWeekdays: 'Werkdagen',
      recurrenceNoEndDate: 'Geen einddatum (optioneel)',
      recurrenceDaily: 'Dagelijks',
      recurrenceWeekly: 'Wekelijks',
      recurrenceMonthly: 'Maandelijks',
      recurrenceYearly: 'Jaarlijks',
      recurrenceNever: 'Nooit',
      recurrenceOn: 'Op',
      recurrenceAfter: 'Na',
      recurrenceOccurrences: 'gebeurtenissen',
      recurrenceSelectWeekday: 'Selecteer ten minste één dag voor wekelijks terugkerende afspraken',
      start: 'Start',
      end: 'Einde',
      startDate: 'Begindatum',
      endDate: 'Einddatum',
      location: 'Locatie',
      locationPlaceholder: 'Vergaderruimte A',
      description: 'Omschrijving',
      descriptionPlaceholder: 'Afspraak details...',
      cancel: 'Annuleren',
      createEvent: 'Afspraak toevoegen',
      creating: 'Aanmaken...',
      editEvent: 'Afspraak bewerken',
      saveChanges: 'Wijzigingen opslaan',
      saving: 'Opslaan...',
      delete: 'Verwijder',
      deleting: 'Verwijderen...',
      deleteEventTitle: 'Afspraak verwijderen',
      deleteRecurringEventTitle: 'Herhaalafspraak verwijderen',
      deleteEventConfirm: 'Ben je er zeker van dat je "{title}" wil verwijderen? Deze actie is onomkeerbaar.',
      deleteRecurringPrompt: '"{title}" is een herhalende afspraak. Hoe wil je hem verwijderen?',
      editRecurringEventTitle: 'Herhalende afspraak bewerken',
      editRecurringPrompt: '"{title}" is een herhalende afspraak. Hoe wil je hem bewerken?',
      editThisOccurrence: 'Alleen deze afspraak wijzigen',
      editThisOccurrenceAndFuture: 'Deze afspraak en alle toekomstige afspraken bewerken',
      editEntireSeries: 'Bewerk de volledige afspraken reeks',
      deleteThisEventOnly: 'Alleen deze afspraak',
      deleteThisOccurrence: 'Verwijder alleen dit moment',
      deleteThisAndFutureEvents: 'Deze en alle toekomstige afspraken',
      deleteThisOccurrenceAndFuture: 'Verwijder deze en alle toekomstige afspraken',
      deleteAllEvents: 'Alle afspraken',
      deleteEntireSeries: 'Verwijder de volledige reeks',
      noEvents: 'Geen afspraken',
      allDay: 'Hele dag',
      at: 'op',
      duration: 'Duur',
      attendees: 'Deelnemers',
      recurrence: 'Terugkerend',
      recurringEvent: 'Terugkerende afpraak',
      unknownAttendee: 'Onbekend',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendar beperking:',
      googleCalendarLimitationBody: 'Het bewerken van Google Calendar afspraken wordt momenteel niet ondersteund in Home Assistant. Je kunt afspraken verwijderen, maar voor het bewerken kun je de Google Calendar app of website gebruiken.',
      cannotModifyTitle: 'ℹ️ Kan het volgende niet aanpassen:',
      cannotModifyBody: 'Deze afspraak mist de vereiste informatie (UID) om te kunnen bewerken of verwijderen. Mogelijk moet je hem opnieuw aanmaken.',
      untitledEvent: 'Afspraak zonder onderwerp',
      noWritableCalendars: "Geen bewerkbare agenda's beschikbaar",
      eventTitleRequired: 'Afspraak onderwerp is verplicht',
      startEndDatesRequired: 'Begin- en einddatum zijn verplicht',
      endDateBeforeStart: 'Einddatum mag niet voor begindatum zijn',
      startEndTimesRequired: 'Begin- en eindtijd is verplicht',
      endTimeBeforeStart: 'Eindtijd mag niet voor begintijd zijn',
      failedCreateEvent: 'Niet gelukt om afspraak aan te maken. Probeer opnieuw.',
      failedUpdateEvent: 'Niet gelukt om afspraak bij te werken. Probeer opnieuw.',
      failedDeleteEvent: 'Niet gelukt om afspraak te verwijderen. Probeer opnieuw.',
      homeAssistantUnavailable: 'Home Assistant niet beschikbaar',
      googleCalendarEditError: 'Het wordt niet ondersteund om Google Calendar afspraken te bewerken binnen Home Assistant. Maak gebruik van de Google Calendar app of website.',
      missingUidError: 'Deze afspraak mist de vereiste informatie (UID) en kan daarom niet bewerkt worden.',
      calendarNoModifyError: 'Het bewerken van afspraken wordt niet ondersteund in deze agenda. Maak een nieuwe afspraak aan.',
      createEventServiceError: 'Niet gelukt om afspraak aan te maken',
      deleteEventServiceError: 'Niet gelukt om afspraak te verwijderen',
      updateEventServiceError: 'Niet gelukt om afspraak bij te werken. Mogelijk wordt dit niet ondersteund.',
      durationHour: '{count} uur',
      durationHours: '{count} uren',
      durationMinute: '{count} minuut',
      durationMinutes: '{count} minuten',
      moreEvents: '+{count} meer'
    }
  }
};

// ============================================================================
// TRANSLATION HELPER FUNCTIONS
// ============================================================================

const DEFAULT_LANGUAGE = 'en';

const normalizeLanguage = (language) => {
  if (!language) return DEFAULT_LANGUAGE;
  return language.toLowerCase().split('-')[0];
};

const resolveLanguage = (language) => {
  const normalized = normalizeLanguage(language);
  return TRANSLATIONS[normalized] ? normalized : DEFAULT_LANGUAGE;
};

const interpolate = (template, params = {}) =>
  template.replace(/\{(\w+)\}/g, (_, key) => (params[key] !== undefined ? params[key] : ''));

const translate = (language, key, params = {}) => {
  const resolved = resolveLanguage(language);
  const fallbackStrings = TRANSLATIONS[DEFAULT_LANGUAGE]?.strings || {};
  const strings = TRANSLATIONS[resolved]?.strings || fallbackStrings;
  const fallback = fallbackStrings[key] || key;
  return interpolate(strings[key] || fallback, params);
};

// ============================================================================
// MAIN CALENDAR CARD CLASS
// ============================================================================

class SkylightCalendarCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._events = [];
    this._currentDate = new Date();
    this._viewMode = 'month'; // 'month', 'week-compact', or 'week-standard'
    this._weekStart = new Date();
    this._fetching = false;
    this._lastFetch = null;
    this._loadedEventRange = null;
    this._hiddenCalendars = new Set(); // Track which calendars are hidden
    this._calendarCapabilities = {}; // Track calendar capabilities
    this._activeLanguage = DEFAULT_LANGUAGE;
    this._hasCustomTitle = false;
    this._isDarkMode = false;
    this._weekStandardFixedOffsetHeight = null;
    this._weekStandardContainerTopInViewport = null;
    this._monthContainerTopInViewport = null;
    this._activeModalBackHandler = null;
    this._handleViewportResize = () => {
      if (this.isEventManagementDialogOpen()) {
        return;
      }

      if (this._config.compact_height && (this._viewMode === 'week-standard' || this._viewMode === 'month')) {
        this.render();
        return;
      }

      this.updateCompactHeaderWrapState();
      this.updateCalendarBadgesScrollState();
    };
  }

  getDashboardScopeKey() {
    const pathnameSegments = (window.location?.pathname || '').split('/').filter(Boolean);
    if (pathnameSegments.length > 0) {
      return pathnameSegments[0];
    }

    const hashPath = (window.location?.hash || '').replace(/^#/, '');
    const hashSegments = hashPath.split('/').filter(Boolean);
    if (hashSegments.length > 0) {
      return hashSegments[0];
    }

    return 'default';
  }

  getPreferenceStorageKey() {
    const dashboardScope = this.getDashboardScopeKey();
    const baseKey = this._config.preference_storage_key || (this._config.entities || []).join('|');

    if (!baseKey) {
      return null;
    }

    return `skylight-calendar-card:${dashboardScope}:${baseKey}`;
  }

  loadPersistedPreferences() {
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return;

    try {
      const raw = window.localStorage?.getItem(storageKey);
      if (!raw) return;

      const parsed = JSON.parse(raw);

      if (typeof parsed.isDarkMode === 'boolean') {
        this._isDarkMode = parsed.isDarkMode;
      }

      if (Array.isArray(parsed.hiddenCalendars)) {
        const knownEntities = new Set(this._config.entities || []);
        this._hiddenCalendars = new Set(parsed.hiddenCalendars.filter((entityId) => knownEntities.has(entityId)));
      }
    } catch (error) {
      console.warn('Failed to load persisted calendar preferences:', error);
    }
  }

  persistPreferences() {
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return;

    try {
      const payload = {
        isDarkMode: this._isDarkMode,
        hiddenCalendars: Array.from(this._hiddenCalendars)
      };
      window.localStorage?.setItem(storageKey, JSON.stringify(payload));
    } catch (error) {
      console.warn('Failed to persist calendar preferences:', error);
    }
  }

  updateCompactHeaderWrapState() {
    if (!this.shadowRoot) return;

    const headerSelector = this._config.compact_header ? '.header-compact' : '.header';
    const header = this.shadowRoot.querySelector(headerSelector);
    if (header) {
      const topLevelChildren = Array.from(header.children).filter((child) => child.offsetParent !== null);
      if (topLevelChildren.length <= 1) {
        header.classList.remove('is-wrapped');
      } else {
        const firstTop = topLevelChildren[0].offsetTop;
        const headerWrapped = topLevelChildren.some((child) => Math.abs(child.offsetTop - firstTop) > 1);
        header.classList.toggle('is-wrapped', headerWrapped);
      }
    }

    const controlsSelector = this._config.compact_header ? '.compact-header-controls' : '.header-controls';
    const controls = this.shadowRoot.querySelector(controlsSelector);
    if (controls) {
      const visibleChildren = Array.from(controls.children).filter((child) => child.offsetParent !== null);
      if (visibleChildren.length <= 1) {
        controls.classList.remove('is-wrapped');
      } else {
        const firstRowTop = visibleChildren[0].offsetTop;
        const isWrapped = visibleChildren.some((child) => Math.abs(child.offsetTop - firstRowTop) > 1);
        controls.classList.toggle('is-wrapped', isWrapped);
      }
    }

    if (!this._config.compact_header) return;

    const badges = this.shadowRoot.querySelector('.calendar-badges-inline');
    if (!badges) return;

    const visibleBadges = Array.from(badges.children).filter((child) => child.offsetParent !== null);
    if (visibleBadges.length <= 1) {
      badges.classList.remove('is-wrapped');
      return;
    }

    const firstBadgeTop = visibleBadges[0].offsetTop;
    const badgesWrapped = visibleBadges.some((child) => Math.abs(child.offsetTop - firstBadgeTop) > 1);
    badges.classList.toggle('is-wrapped', badgesWrapped);
  }


  updateCalendarBadgesScrollState() {
    if (!this.shadowRoot || this._config.compact_header) return;

    const badgesContainer = this.shadowRoot.querySelector('.calendar-badges-container');
    const badges = this.shadowRoot.querySelector('.calendar-badges');
    if (!badgesContainer || !badges) return;

    const maxScrollLeft = badges.scrollWidth - badges.clientWidth;
    const hasOverflow = maxScrollLeft > 1;
    const showLeftIndicator = hasOverflow && badges.scrollLeft > 1;
    const showRightIndicator = hasOverflow && badges.scrollLeft < (maxScrollLeft - 1);

    badgesContainer.classList.toggle('has-overflow', hasOverflow);
    badgesContainer.classList.toggle('show-left-indicator', showLeftIndicator);
    badgesContainer.classList.toggle('show-right-indicator', showRightIndicator);
  }

  isEventManagementDialogOpen() {
    const modal = this.shadowRoot?.getElementById('event-modal');
    return !!modal && modal.classList.contains('show');
  }

  setConfig(config) {
    if (!config.entities || !Array.isArray(config.entities)) {
      throw new Error('You need to define calendar entities');
    }
    const language = resolveLanguage(config.language || this._hass?.language || this._hass?.locale?.language);
    this._hasCustomTitle = config.title !== undefined && config.title !== null;
    const previousHiddenCalendars = new Set(this._hiddenCalendars);
    this._config = {
      title: this._hasCustomTitle ? config.title : translate(language, 'defaultTitle'),
      entities: config.entities,
      showWeekNumbers: config.show_week_numbers !== false,
      firstDayOfWeek: config.first_day_of_week || 0, // 0 = Sunday
      colors: config.colors || {},
      calendar_names: config.calendar_names || {}, // Map entity IDs to friendly names
      maxEvents: config.max_events || 100,
      default_view: config.default_view || 'month', // Default view on load
      week_days: config.week_days || [0, 1, 2, 3, 4, 5, 6], // Which days to show in week view
      rolling_days_week_compact: config.rolling_days_week_compact ?? null, // If set, compact week view shows current day + N days instead of week_days
      rolling_days_schedule: config.rolling_days_schedule ?? null, // If set, schedule week view shows current day + N days instead of week_days
      rolling_weeks: config.rolling_weeks || null, // If set, show current week + N weeks in month view
      week_start_hour: config.week_start_hour || 8, // Start hour for week-standard view
      week_end_hour: config.week_end_hour || 21, // End hour for week-standard view (9pm)
      compact_height: config.compact_height || false, // Fit to screen height
      height_scale: config.height_scale || 1.0, // Scale factor for height (0.5 = 50%, 2.0 = 200%)
      compact_header: config.compact_header || false, // Compact header layout
      hide_event_calendar_bubble: config.hide_event_calendar_bubble || false, // Hide calendar initial bubble on events
      event_font_size: config.event_font_size ?? 11, // Font size for event bubble text in every view
      event_font_colors: config.event_font_colors || {}, // Per-calendar font colors for event bubble text
      hide_times_for_calendars: config.hide_times_for_calendars || [], // Hide times in schedule view for specific calendars
      show_current_time_bar: config.show_current_time_bar || false, // Show a "now" indicator in schedule view
      use_24hr_schedule: config.use_24hr_schedule ?? false, // Use 24-hour time notation in schedule view
      header_color: config.header_color !== undefined ? config.header_color : 'var(--primary-color)', // Custom header background color/gradient
      background_transparent: config.background_transparent || false, // Make calendar surfaces transparent in every view
      background_image_url: config.background_image_url || null, // Optional background image URL for the calendar
      background_image_size: config.background_image_size || 'cover', // CSS background-size for calendar image
      background_image_position: config.background_image_position || 'center', // CSS background-position for calendar image
      background_image_repeat: config.background_image_repeat || 'no-repeat', // CSS background-repeat for calendar image
      enable_event_management: config.enable_event_management !== false, // Enable create/edit/delete
      readonly_calendars: config.readonly_calendars || [], // Calendars that should not allow modifications
      language: config.language || null, // Language code for translations (e.g., 'en', 'de', 'fr')
      locale: config.locale || null, // Locale override for date/time formatting (e.g., 'en-US')
      default_dark_mode: config.default_dark_mode ?? config.dark_mode ?? false, // Start in dark mode on initial load
      preference_storage_key: config.preference_storage_key || null, // Optional key to isolate saved preferences per card
      ...config
    };
    this._viewMode = this._config.default_view;
    this._isDarkMode = !!this._config.default_dark_mode;
    this._hiddenCalendars = new Set(
      Array.from(previousHiddenCalendars).filter((entityId) => this._config.entities.includes(entityId))
    );
    this.loadPersistedPreferences();
    this._loadedEventRange = null;
    this.setWeekStart();
    this.render();
    this._activeLanguage = language;
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    
    // Check calendar capabilities when hass is set
    if (!oldHass || this._hass !== oldHass) {
      this.checkAllCalendarCapabilities();
    }

    const resolvedLanguage = this.getLanguage();
    if (resolvedLanguage !== this._activeLanguage) {
      this._activeLanguage = resolvedLanguage;
      if (!this._hasCustomTitle) {
        this._config.title = translate(this._activeLanguage, 'defaultTitle');
      }
      this.render();
    }
    
    // Refresh only when stale or when current view needs dates outside loaded range.
    if (!oldHass) {
      this.ensureEventsForCurrentRange({ force: true });
    } else {
      this.ensureEventsForCurrentRange();
    }
  }

  async checkAllCalendarCapabilities() {
    if (!this._hass) return;
    
    for (const entityId of this._config.entities) {
      const entity = this._hass.states[entityId];
      if (entity) {
        const features = entity.attributes?.supported_features || 0;
        
        // Check if this is a Google Calendar (which doesn't support UPDATE/DELETE services)
        const isGoogleCalendar = entityId.includes('google') || 
                                 entity.attributes?.integration === 'google';
        
        this._calendarCapabilities[entityId] = {
          canCreate: true, // Most calendars support creation
          canUpdate: (features & 2) !== 0, // UPDATE_EVENT = 2
          canDelete: (features & 4) !== 0, // DELETE_EVENT = 4
          isReadonly: this._config.readonly_calendars.includes(entityId),
          isGoogleCalendar: isGoogleCalendar // Track Google Calendar separately
        };
      }
    }
  }

  getWritableCalendars() {
    return this._config.entities.filter(entityId => {
      const caps = this._calendarCapabilities[entityId];
      return caps && caps.canCreate && !caps.isReadonly;
    });
  }

  getEventIdentityKey(entityId, event) {
    return `${entityId}|${event.uid || ''}|${event.recurring_event_id || ''}|${event.start?.dateTime || event.start?.date || event.start || ''}|${event.end?.dateTime || event.end?.date || event.end || ''}|${event.summary || ''}`;
  }

  async fetchEventsInRange(startDate, endDate) {
    const chunks = this.getDateRangeChunks(startDate, endDate, 30);
    const eventsByCalendar = await Promise.all(
      this._config.entities.map((entityId, index) =>
        this.fetchEventsForCalendar(entityId, index, chunks)
      )
    );

    return eventsByCalendar.flat();
  }

  async fetchEventsForCalendar(entityId, colorIndex, chunks) {
    const seen = new Set();
    const color = this._config.colors[entityId] || this.getDefaultColor(colorIndex);

    const chunkEventLists = await Promise.all(
      chunks.map(chunk => this.fetchEventsForChunk(entityId, chunk))
    );

    const mergedEvents = [];
    chunkEventLists.forEach(events => {
      if (!events || !Array.isArray(events)) return;

      events.forEach(event => {
        const key = this.getEventIdentityKey(entityId, event);
        if (seen.has(key)) return;
        seen.add(key);

        mergedEvents.push({
          ...event,
          entityId,
          color
        });
      });
    });

    return mergedEvents;
  }

  async fetchEventsForChunk(entityId, chunk) {
    const chunkStartStr = chunk.startDate.toISOString();
    const chunkEndStr = chunk.endDate.toISOString();

    try {
      // Use WebSocket API to get calendar events
      return await this._hass.callWS({
        type: 'calendar/event/list',
        entity_id: entityId,
        start_date_time: chunkStartStr,
        end_date_time: chunkEndStr
      });
    } catch (error) {
      // WebSocket API might not be available in older HA versions or for some integrations
      // Try REST API fallback without logging (this is expected)
      try {
        const startDateOnly = chunk.startDate.toISOString().split('T')[0];
        const endDateOnly = chunk.endDate.toISOString().split('T')[0];
        return await this._hass.callApi('GET', `calendars/${entityId}?start=${startDateOnly}T00:00:00Z&end=${endDateOnly}T23:59:59Z`);
      } catch (error2) {
        // Both methods failed - this is a real error
        console.error(`Failed to fetch events for ${entityId}:`, error2.message || error2);
        return [];
      }
    }
  }

  mergeEvents(existingEvents, incomingEvents) {
    const mergedByKey = new Map();

    existingEvents.forEach(event => {
      mergedByKey.set(this.getEventIdentityKey(event.entityId, event), event);
    });

    incomingEvents.forEach(event => {
      mergedByKey.set(this.getEventIdentityKey(event.entityId, event), event);
    });

    const merged = Array.from(mergedByKey.values());
    merged.sort((a, b) => this.getEventStartDate(a) - this.getEventStartDate(b));
    return merged.slice(0, this._config.maxEvents);
  }

  async updateEvents() {
    if (!this._hass || this._fetching) return;

    const { startDate, endDate } = this.getEventFetchRange();
    this._fetching = true;
    this._lastFetch = Date.now();

    try {
      const newEvents = await this.fetchEventsInRange(startDate, endDate);
      newEvents.sort((a, b) => this.getEventStartDate(a) - this.getEventStartDate(b));
      this._events = newEvents.slice(0, this._config.maxEvents);
      this._loadedEventRange = { startDate, endDate };
      this.render();
    } finally {
      this._fetching = false;
    }
  }

  async extendEventsForRange(startDate, endDate) {
    if (!this._hass || this._fetching) return;

    this._fetching = true;
    this._lastFetch = Date.now();

    try {
      const additionalEvents = await this.fetchEventsInRange(startDate, endDate);
      this._events = this.mergeEvents(this._events, additionalEvents);
      this.render();
    } finally {
      this._fetching = false;
    }
  }

  isDateRangeCoveredByLoadedEvents(targetStartDate, targetEndDate) {
    if (!this._loadedEventRange) return false;

    return targetStartDate >= this._loadedEventRange.startDate &&
           targetEndDate <= this._loadedEventRange.endDate;
  }

  async ensureEventsForCurrentRange({ force = false, renderIfCovered = false } = {}) {
    const shouldRefreshForAge = !this._lastFetch || (Date.now() - this._lastFetch > 60000);
    const { startDate: visibleStartDate, endDate: visibleEndDate } = this.getVisibleDateRange();

    // Background stale refreshes run through this path via hass updates.
    // Keep dialogs stable by postponing only those refreshes while modal is open.
    if (this.isEventManagementDialogOpen() && (force || shouldRefreshForAge)) {
      return;
    }

    if (force || shouldRefreshForAge || !this._loadedEventRange) {
      await this.updateEvents();
      return;
    }

    // Gate fetches on the actually visible range. If the user can already see
    // all required dates from loaded data, avoid any network call.
    if (this.isDateRangeCoveredByLoadedEvents(visibleStartDate, visibleEndDate)) {
      if (renderIfCovered) {
        this.render();
      }
      return;
    }

    // Once visible range falls outside loaded coverage, fetch around current view
    // (with buffer) and only request missing leading/trailing segments.
    const { startDate, endDate } = this.getEventFetchRange();
    const missingRanges = [];

    if (startDate < this._loadedEventRange.startDate) {
      const missingStartEnd = new Date(this._loadedEventRange.startDate);
      missingStartEnd.setDate(missingStartEnd.getDate() - 1);
      missingStartEnd.setHours(23, 59, 59, 999);
      missingRanges.push({ startDate, endDate: missingStartEnd });
    }

    if (endDate > this._loadedEventRange.endDate) {
      const missingEndStart = new Date(this._loadedEventRange.endDate);
      missingEndStart.setDate(missingEndStart.getDate() + 1);
      missingEndStart.setHours(0, 0, 0, 0);
      missingRanges.push({ startDate: missingEndStart, endDate });
    }

    for (const range of missingRanges) {
      await this.extendEventsForRange(range.startDate, range.endDate);
    }

    this._loadedEventRange = {
      startDate: new Date(Math.min(this._loadedEventRange.startDate.getTime(), startDate.getTime())),
      endDate: new Date(Math.max(this._loadedEventRange.endDate.getTime(), endDate.getTime()))
    };

    this.render();
  }

  getEventFetchRange() {
    const { startDate: visibleStart, endDate: visibleEnd } = this.getVisibleDateRange();

    // Keep a small look-behind and look-ahead buffer.
    const startDate = new Date(visibleStart);
    startDate.setDate(startDate.getDate() - 7);

    const endDate = new Date(visibleEnd);
    endDate.setDate(endDate.getDate() + 30);

    return { startDate, endDate };
  }

  getVisibleDateRange() {
    // Month rolling-weeks mode: from start of anchor week through configured weeks.
    if (this._viewMode === 'month' && this._config.rolling_weeks !== null) {
      const anchorDate = new Date(this._currentDate);
      anchorDate.setHours(0, 0, 0, 0);
      const currentDay = anchorDate.getDay();
      const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;

      const startDate = new Date(anchorDate);
      startDate.setDate(anchorDate.getDate() - diff);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + ((this._config.rolling_weeks + 1) * 7) - 1);
      endDate.setHours(23, 59, 59, 999);
      return { startDate, endDate };
    }

    // Standard month mode: full rendered grid (including adjacent month cells).
    if (this._viewMode === 'month') {
      const year = this._currentDate.getFullYear();
      const month = this._currentDate.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startOffset = (firstDay - this._config.firstDayOfWeek + 7) % 7;
      const totalCells = startOffset + daysInMonth;
      const trailingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

      const startDate = new Date(year, month, 1 - startOffset);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(year, month, daysInMonth + trailingCells);
      endDate.setHours(23, 59, 59, 999);

      return { startDate, endDate };
    }

    // Week views: from first shown day to last shown day.
    const weekDays = this.getWeekDays();
    const startDate = new Date(weekDays[0]);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(weekDays[weekDays.length - 1]);
    endDate.setHours(23, 59, 59, 999);
    return { startDate, endDate };
  }

  getDateRangeChunks(startDate, endDate, chunkDays = 30) {
    const chunks = [];
    let cursor = new Date(startDate);
    cursor.setHours(0, 0, 0, 0);

    while (cursor <= endDate) {
      const chunkStart = new Date(cursor);
      const chunkEnd = new Date(cursor);
      chunkEnd.setDate(chunkEnd.getDate() + chunkDays - 1);
      if (chunkEnd > endDate) {
        chunkEnd.setTime(endDate.getTime());
      }
      chunkEnd.setHours(23, 59, 59, 999);

      chunks.push({ startDate: chunkStart, endDate: chunkEnd });

      cursor = new Date(chunkEnd);
      cursor.setDate(cursor.getDate() + 1);
      cursor.setHours(0, 0, 0, 0);
    }

    return chunks;
  }

  getEventStartDate(event) {
    if (event.start?.dateTime) return new Date(event.start.dateTime);
    if (event.start?.date) return new Date(`${event.start.date}T00:00:00`);
    return new Date(event.start);
  }

  getDefaultColor(index) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    return colors[index % colors.length];
  }

  connectedCallback() {
    window.addEventListener('resize', this._handleViewportResize);
    window.visualViewport?.addEventListener('resize', this._handleViewportResize);
    this.render();
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleViewportResize);
    window.visualViewport?.removeEventListener('resize', this._handleViewportResize);
  }

  getCompactMaxHeight(containerTopInViewport = null) {
    if (!this._config.compact_height) return null;

    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const containerTop = Math.max(
      containerTopInViewport ?? this.getBoundingClientRect().top,
      0
    );
    const bottomSpacing = 24;
    const minimumHeight = 180;

    return Math.max(minimumHeight, Math.floor(viewportHeight - containerTop - bottomSpacing));
  }

  getCompactContainerStyle(maxHeight = null) {
    if (!this._config.compact_height) return '';

    const resolvedMaxHeight = maxHeight || this.getCompactMaxHeight();
    if (!resolvedMaxHeight) return '';

    return `max-height: ${resolvedMaxHeight}px; overflow-y: auto;`;
  }

  updateWeekStandardFixedOffsetHeightFromDom() {
    if (this._viewMode !== 'week-standard' || !this._config.compact_height || !this.shadowRoot) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this.shadowRoot.querySelector('.week-standard-container');
    const headerSpacer = this.shadowRoot.querySelector('.time-column-header-spacer');
    const extraSpacer = this.shadowRoot.querySelector('.time-column-extra-spacer');
    const allDaySpacer = this.shadowRoot.querySelector('.time-column-allday-spacer');
    if (!container || !headerSpacer || !extraSpacer) return;

    const computed = window.getComputedStyle(container);
    const containerPadding = (parseFloat(computed.paddingTop) || 0) + (parseFloat(computed.paddingBottom) || 0);
    const measuredOffset = Math.ceil(
      containerPadding +
      headerSpacer.getBoundingClientRect().height +
      extraSpacer.getBoundingClientRect().height +
      (allDaySpacer ? allDaySpacer.getBoundingClientRect().height : 0)
    );
    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);

    if (!Number.isFinite(measuredOffset) || !Number.isFinite(measuredContainerTop)) return;

    const offsetChanged = this._weekStandardFixedOffsetHeight === null || Math.abs(this._weekStandardFixedOffsetHeight - measuredOffset) > 1;
    const containerTopChanged = this._weekStandardContainerTopInViewport === null || Math.abs(this._weekStandardContainerTopInViewport - measuredContainerTop) > 1;

    if (offsetChanged || containerTopChanged) {
      this._weekStandardFixedOffsetHeight = measuredOffset;
      this._weekStandardContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }


  updateMonthContainerTopInViewportFromDom() {
    if (this._viewMode !== 'month' || !this._config.compact_height || !this.shadowRoot) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this.shadowRoot.querySelector('.calendar-grid');
    if (!container) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    if (!Number.isFinite(measuredContainerTop)) return;

    const containerTopChanged = this._monthContainerTopInViewport === null || Math.abs(this._monthContainerTopInViewport - measuredContainerTop) > 1;
    if (containerTopChanged) {
      this._monthContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }


  getLanguage() {
    return resolveLanguage(this._config.language || this._hass?.language || this._hass?.locale?.language);
  }

  getLocale() {
    const resolved = this._activeLanguage || this.getLanguage();
    return this._config.locale || TRANSLATIONS[resolved]?.locale || this._hass?.locale?.language || TRANSLATIONS[DEFAULT_LANGUAGE]?.locale || 'en-US';
  }

  t(key, params = {}) {
    return translate(this.getLanguage(), key, params);
  }

  getWeekdayNames(format = 'short') {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { weekday: format });
    const baseDate = new Date(2021, 5, 6);
    const names = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + i);
      names.push(formatter.format(date));
    }
    return names;
  }

  setWeekStart() {
    const date = new Date(this._currentDate);
    const day = date.getDay();
    const diff = (day - this._config.firstDayOfWeek + 7) % 7;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    this._weekStart = date;
  }

  getRollingDaysForView(viewMode = this._viewMode) {
    if (viewMode === 'week-compact' && this._config.rolling_days_week_compact !== null) {
      return this._config.rolling_days_week_compact;
    }

    if (viewMode === 'week-standard' && this._config.rolling_days_schedule !== null) {
      return this._config.rolling_days_schedule;
    }

    return null;
  }

  getWeekDays(viewMode = this._viewMode) {
    const rollingDays = this.getRollingDaysForView(viewMode);

    // If rolling days are set, show current date + N days
    if (rollingDays !== null) {
      const days = [];
      const startDate = new Date(this._currentDate);
      startDate.setHours(0, 0, 0, 0);
      
      for (let i = 0; i <= rollingDays; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        days.push(date);
      }
      return days;
    }
    
    // Otherwise use the week-based approach
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(this._weekStart);
      date.setDate(this._weekStart.getDate() + i);
      if (this._config.week_days.includes(date.getDay())) {
        days.push(date);
      }
    }
    return days;
  }

  getStyles() {
    return `
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        width: 100%;
      }
      
      .calendar-container {
        background: var(--calendar-background, #ffffff);
        background-image: var(--calendar-background-image, none);
        background-size: var(--calendar-background-size, cover);
        background-position: var(--calendar-background-position, center);
        background-repeat: var(--calendar-background-repeat, no-repeat);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        width: 100%;
      }
      
      .header {
        background: var(--header-background);
        color: white;
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
      
      .header-compact {
        padding: 16px 24px;
      }
      
      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      
      .compact-header-left {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      .header-compact.is-wrapped .compact-header-left,
      .header-compact.is-wrapped .compact-header-controls {
        width: 100%;
        justify-content: center;
      }
      
      .header.is-wrapped .header-left,
      .header.is-wrapped .header-controls {
        width: 100%;
        justify-content: center;
      }

      .header-controls.is-wrapped .period-controls {
        margin-left: 0;
      }

      .calendar-badges-inline {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .calendar-badges-inline.is-wrapped {
        justify-content: center;
      }
      
      .calendar-badge-inline {
        padding: 6px 12px !important;
        font-size: 12px !important;
      }
      
      .calendar-badge-inline .calendar-badge-icon {
        width: 20px !important;
        height: 20px !important;
        font-size: 10px !important;
      }
      
      .calendar-badge-inline .calendar-badge-name {
        font-size: 12px;
      }
      
      .header-title {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
      }
      
      .add-event-button,
      .compact-add-event-button {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: background 0.2s;
      }
      
      .add-event-button:hover,
      .compact-add-event-button:hover {
        background: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.6);
        transform: none;
      }
      
      .add-event-button .icon,
      .compact-add-event-button .icon {
        font-size: 14px;
      }
      
      .header-controls {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }

      .compact-header-controls {
        justify-content: flex-end;
      }

      .period-controls,
      .compact-period-controls {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 0 1 auto;
        margin-left: auto;
      }

      .period-controls .month-year,
      .compact-period-controls .month-year {
        min-width: auto;
      }

      .header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped .compact-period-controls {
        margin-left: 0;
      }
      
      .view-mode-buttons {
        display: flex;
        gap: 4px;
        background: rgba(255, 255, 255, 0.15);
        padding: 4px;
        border-radius: 8px;
      }
      
      .view-mode-button {
        background: transparent;
        border: none;
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        transition: background 0.2s;
      }
      
      .view-mode-button:hover {
        background: rgba(255, 255, 255, 0.15);
      }
      
      .view-mode-button.active {
        background: rgba(255, 255, 255, 0.3);
      }
      
      .nav-button {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }
      
      .nav-button:hover {
        background: rgba(255, 255, 255, 0.3);
      }
      
      .today-button {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: background 0.2s;
      }
      
      .today-button:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      .theme-toggle {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        background: rgba(255, 255, 255, 0.2);
        color: white;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        line-height: 1;
        transition: all 0.2s;
      }

      .theme-toggle:hover {
        background: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.6);
      }

      .month-year {
        font-size: 18px;
        font-weight: 500;
        color: white;
        min-width: 140px;
        text-align: center;
      }
      
      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1px;
        background: #e5e7eb;
        border-top: 1px solid #e5e7eb;
      }


      .calendar-grid.compact-month {
        align-items: stretch;
      }

      .calendar-grid.compact-month .day-cell {
        min-height: 0;
        overflow: hidden;
      }
      
      .day-header {
        background: #f9fafb;
        padding: 12px 8px;
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }
      
      .day-cell {
        background: white;
        min-height: 100px;
        min-width: 0;
        padding: 8px;
        position: relative;
        cursor: pointer;
        transition: background 0.2s;
      }
      
      .day-cell:hover {
        background: #f9fafb;
      }
      
      .day-cell.other-month {
        background: #fafafa;
        opacity: 0.5;
      }
      
      .day-cell.today {
        background: #eff6ff;
      }
      
      .day-number {
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 4px;
      }
      
      .day-cell.today .day-number {
        background: #3b82f6;
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }
      
      .event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 4px 6px;
        border-radius: 4px;
        font-size: var(--event-bubble-font-size, 11px);
        line-height: 1.2;
        margin-bottom: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-weight: 500;
      }
      
      .event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }
      
      .event-time {
        font-size: 0.9em;
        opacity: 0.9;
        margin-right: 4px;
      }
      
      .more-events {
        font-size: 10px;
        color: #6b7280;
        margin-top: 2px;
        font-weight: 500;
        cursor: pointer;
        width: fit-content;
      }

      .more-events:hover {
        text-decoration: underline;
      }

      .week-compact-container.single-day-modal {
        grid-template-columns: 1fr;
        border-top: none;
        background: transparent;
      }
      
      /* Week Compact View Styles */
      .week-compact-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1px;
        background: #e5e7eb;
        border-top: 1px solid #e5e7eb;
      }
      
      .week-day-column {
        background: white;
        padding: 16px 12px;
        min-height: 200px;
      }
      
      .week-day-header {
        text-align: center;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid #e5e7eb;
      }
      
      .week-day-name {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }
      
      .week-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
      }
      
      .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }
      
      .week-day-column.today .week-day-date {
        color: #3b82f6;
      }
      
      .week-compact-event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        font-size: var(--event-bubble-font-size, 11px);
        padding: 8px 10px;
        border-radius: 6px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      
      .week-compact-event:hover {
        transform: translateX(2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }
      
      .week-compact-event-time {
        font-size: 0.85em;
        font-weight: 600;
        opacity: 0.9;
        margin-bottom: 4px;
      }
      
      .week-compact-event-title {
        font-size: 1em;
        font-weight: 500;
        line-height: 1.3;
      }
      
      /* Week Standard View Styles */

      .calendar-badges-container {
        position: relative;
      }

      .calendar-badges {
        padding: 16px 24px;
        display: flex;
        gap: 12px;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        background: white;
        border-bottom: 1px solid #e5e7eb;
      }

      .calendar-badges-container.has-overflow::after,
      .calendar-badges-container.has-overflow::before {
        position: absolute;
        top: 0;
        bottom: 1px;
        width: 44px;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 800;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.85);
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .calendar-badges-container.has-overflow::after {
        content: '»';
        right: 0;
        color: rgba(17, 24, 39, 0.85);
        background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.has-overflow::before {
        content: '«';
        left: 0;
        color: rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.show-right-indicator::after,
      .calendar-badges-container.show-left-indicator::before {
        opacity: 1;
      }

      .calendar-badges-container.show-right-indicator::after {
        animation: badges-overflow-nudge-right 1.2s ease-in-out infinite;
      }

      .calendar-badges-container.show-left-indicator::before {
        animation: badges-overflow-nudge-left 1.2s ease-in-out infinite;
      }

      @keyframes badges-overflow-nudge-right {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(3px);
        }
      }

      @keyframes badges-overflow-nudge-left {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-3px);
        }
      }
      
      .calendar-badge {
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 20px;
        border: 2px solid;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        user-select: none;
      }
      
      .calendar-badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      .calendar-badge-hidden {
        opacity: 0.5;
      }
      
      .calendar-badge-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 11px;
        font-weight: 600;
      }
      
      .calendar-badge-name {
        color: #374151;
      }
      
      .week-standard-container {
        display: flex;
        align-items: flex-start;
        background: #f9fafb;
        overflow-x: auto;
        padding: 16px;
        gap: 12px;
        width: 100%;
        box-sizing: border-box;
      }
      
      .time-column {
        min-width: 60px;
        flex-shrink: 0;
        position: relative;
      }
      
      .time-column-header-spacer {
        height: 60px;
        background: transparent;
        flex-shrink: 0;
      }
      
      .time-column-allday-spacer {
        padding: 8px;
        background: transparent;
        border-bottom: 2px solid transparent;
        flex-shrink: 0;
        box-sizing: border-box;
      }
      
      .time-column-extra-spacer {
        height: 35px;
        background: transparent;
        flex-shrink: 0;
      }
      
      .time-slot {
        height: 120px;
        font-size: 11px;
        color: #9ca3af;
        text-align: right;
        font-weight: 500;
        position: relative;
        padding-right: 8px;
        display: flex;
        align-items: flex-start;
        padding-top: 0;
        box-sizing: border-box;
        border-top: 1px solid transparent;
      }
      
      .time-slot-label {
        position: absolute;
        top: -6px;
        right: 8px;
        line-height: 1;
      }
      
      .week-standard-day-column {
        flex: 1;
        min-width: 140px;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
      
      .week-standard-day-header {
        padding: 16px;
        text-align: center;
        border-bottom: 1px solid #e5e7eb;
        background: white;
      }
      
      .week-standard-day-name {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }
      
      .week-standard-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }
      
      .day-time-slots {
        position: relative;
        min-height: 600px;
      }
      
      .all-day-events {
        padding: 8px;
        background: #f9fafb;
        border-bottom: 2px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
      }
      
      .all-day-event {
        padding: 4px 8px;
        color: var(--event-bubble-text-color, white);
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-size: var(--event-bubble-font-size, 11px);
        flex-shrink: 0;
        height: 24px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
      
      .all-day-event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }
      
      .all-day-event-title {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: inherit;
      }
      
      .day-time-slot {
        height: 120px;
        border-top: 1px solid #f3f4f6;
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        transition: background 0.2s;
      }
      
      .day-time-slot:hover {
        background: rgba(59, 130, 246, 0.05);
      }
      
      .week-standard-event {
        position: absolute;
        left: 8px;
        right: 8px;
        color: var(--event-bubble-text-color, white);
        padding: 4px 8px;
        border-radius: 8px;
        font-size: var(--event-bubble-font-size, 11px);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        z-index: 1;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        box-sizing: border-box;
      }
      
      .week-standard-event:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10;
      }
      
      .week-standard-event-title {
        font-weight: 600;
        margin-bottom: 4px;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .week-standard-event-time {
        font-size: 0.85em;
        font-weight: 500;
        opacity: 0.85;
      }
      
      .week-standard-event-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        float: right;
        margin-left: 8px;
      }

      .current-time-line {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: #ef4444;
        z-index: 5;
        pointer-events: none;
      }

      .current-time-line::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        left: -4px;
        top: -3px;
      }
      
      .event-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
      }
      
      .event-modal.show {
        display: flex;
      }
      
      .modal-content {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }
      
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 16px;
      }
      
      .modal-title {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
        margin: 0;
      }
      
      .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: background 0.2s;
      }
      
      .modal-close:hover {
        background: #f3f4f6;
      }
      
      .modal-body {
        color: #374151;
      }
      
      .modal-row {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
        font-size: 14px;
      }
      
      .modal-label {
        font-weight: 600;
        min-width: 80px;
        color: #6b7280;
      }
      
      .modal-value {
        flex: 1;
      }
      
      .form-group {
        margin-bottom: 20px;
      }
      
      .form-label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 8px;
      }
      
      .form-required {
        color: #ef4444;
        margin-left: 4px;
      }
      
      .form-input {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }
      
      .form-input:focus {
        outline: none;
        border-color: #3b82f6;
      }
      
      .form-input.error {
        border-color: #ef4444;
      }
      
      .form-select {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        background: white;
        cursor: pointer;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }
      
      .form-select:focus {
        outline: none;
        border-color: #3b82f6;
      }
      
      .form-textarea {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        min-height: 80px;
        resize: vertical;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }
      
      .form-textarea:focus {
        outline: none;
        border-color: #3b82f6;
      }
      
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      
      .form-checkbox-group {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .form-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
      
      .form-checkbox-label {
        font-size: 14px;
        color: #374151;
        cursor: pointer;
        user-select: none;
      }

      .recurrence-ends-label {
        margin-bottom: 10px;
      }

      .recurrence-end-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
        margin-bottom: 10px;
      }

      .recurrence-end-option {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #374151;
        cursor: pointer;
      }

      .recurrence-end-option input[type="radio"] {
        margin: 0;
      }

      .recurrence-end-row .form-input {
        margin: 0;
      }

      .recurrence-after-input {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .recurrence-after-input .form-input {
        max-width: 80px;
      }
      
      .form-error {
        color: #ef4444;
        font-size: 13px;
        margin-top: 4px;
      }
      
      .form-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        margin-top: 24px;
      }
      
      .btn {
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        font-family: inherit;
      }
      
      .btn-primary {
        background: #3b82f6;
        color: white;
      }
      
      .btn-primary:hover {
        background: #2563eb;
        transform: translateY(-1px);
      }
      
      .btn-primary:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
      }
      
      .btn-secondary {
        background: #f3f4f6;
        color: #374151;
      }
      
      .btn-secondary:hover {
        background: #e5e7eb;
      }
      
      .btn-danger {
        background: #ef4444;
        color: white;
      }
      
      .btn-danger:hover {
        background: #dc2626;
        transform: translateY(-1px);
      }
      
      .btn-danger:disabled {
        background: #fca5a5;
        cursor: not-allowed;
        transform: none;
      }
      
      .modal-actions {
        display: flex;
        gap: 12px;
        justify-content: space-between;
        margin-top: 24px;
        align-items: center;
      }
      
      .modal-actions-left {
        display: flex;
        gap: 12px;
      }
      
      .modal-actions-right {
        display: flex;
        gap: 12px;
      }
      
      .confirm-dialog {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }
      
      .confirm-title {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
        margin: 0 0 12px 0;
      }
      
      .confirm-message {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 20px;
        line-height: 1.5;
      }
      
      .confirm-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
      }
      
      .recurring-options {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }
      
      .recurring-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        cursor: pointer;
        border-radius: 6px;
        transition: background 0.2s;
        margin-bottom: 8px;
      }
      
      .recurring-option:hover {
        background: #f3f4f6;
      }
      
      .recurring-option:last-child {
        margin-bottom: 0;
      }
      
      .recurring-option input[type="radio"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }
      
      .recurring-option-label {
        flex: 1;
      }
      
      .recurring-option-title {
        font-weight: 600;
        color: #111827;
        font-size: 14px;
        margin-bottom: 2px;
      }
      
      .recurring-option-description {
        font-size: 13px;
        color: #6b7280;
      }
      
      .error-message {
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: #991b1b;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }
      
      .success-message {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        color: #166534;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }
      
      .empty-state {
        padding: 40px 24px;
        text-align: center;
        color: #6b7280;
      }
      
      .empty-state-icon {
        font-size: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }
      
      .empty-state-text {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
      }
      
      .empty-state-subtext {
        font-size: 14px;
        opacity: 0.8;
      }

      .day-modal-event {
        margin-bottom: 16px;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
      }

      .day-modal-event-title {
        font-weight: 600;
        margin-bottom: 4px;
      }

      .day-modal-event-meta {
        font-size: 13px;
        color: #6b7280;
      }

      .day-modal-event-location {
        font-size: 13px;
        color: #6b7280;
        margin-top: 4px;
      }

      .info-banner {
        border-radius: 8px;
        padding: 12px;
        margin-top: 16px;
        font-size: 13px;
      }

      .info-banner.warning {
        background: #fef3c7;
        border: 1px solid #fbbf24;
        color: #92400e;
      }


      .calendar-container.dark-mode {
        background: #2a2f36;
        color: #e8ecf1;
      }

      .calendar-container.dark-mode .week-standard-container,
      .calendar-container.dark-mode .calendar-badges {
        background: #30363f;
        border-color: #4b5563;
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::after {
        color: rgba(248, 250, 252, 0.95);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to left, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::before {
        color: rgba(248, 250, 252, 0.9);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }


      .calendar-container.dark-mode .day-cell,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-standard-day-header,
      .calendar-container.dark-mode .all-day-events,
      .calendar-container.dark-mode .day-time-slot,
      .calendar-container.dark-mode .time-slot,
      .calendar-container.dark-mode .time-slot-label,
      .calendar-container.dark-mode .empty-state {
        background: #353c45;
        color: #dde3ea;
        border-color: #556070;
      }
      
      .calendar-container.dark-mode .time-slot {
        background: #353c45;
        color: #dde3ea;
        border-color: #353c45;
      }

	  .calendar-container.dark-mode .day-header {
        background: #353b42;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }
	  
      .calendar-container.dark-mode .week-standard-day-name,
      .calendar-container.dark-mode .week-standard-day-date,
      .calendar-container.dark-mode .week-day-name,
      .calendar-container.dark-mode .week-day-date {
        background: #3b434d;
        color: #dde3ea;
        border-color: #556070;
      }
	  
      .calendar-container.dark-mode .week-day-column.today .week-day-date {
        color: #3b82f6;
      }
	  
      .calendar-container.dark-mode .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .calendar-container.dark-mode .day-cell:hover,
      .calendar-container.dark-mode .day-time-slot:hover,
      .calendar-container.dark-mode .recurring-option:hover,
      .calendar-container.dark-mode .modal-close:hover,
      .calendar-container.dark-mode .btn-secondary:hover {
        background: #3f4752;
      }

      .calendar-container.dark-mode .day-cell.other-month {
        background: #2f353e;
      }

      .calendar-container.dark-mode .day-number,
      .calendar-container.dark-mode .month-year,
      .calendar-container.dark-mode .all-day-event-title,
      .calendar-container.dark-mode .week-standard-event,
      .calendar-container.dark-mode .modal-title,
      .calendar-container.dark-mode .confirm-title,
      .calendar-container.dark-mode .recurring-option-title {
        color: #f4f7fb;
      }

      .calendar-container.dark-mode .event-time,
      .calendar-container.dark-mode .more-events,
      .calendar-container.dark-mode .week-standard-event-time,
      .calendar-container.dark-mode .modal-label,
      .calendar-container.dark-mode .confirm-message,
      .calendar-container.dark-mode .recurring-option-description,
      .calendar-container.dark-mode .day-modal-event-meta,
      .calendar-container.dark-mode .day-modal-event-location,
      .calendar-container.dark-mode .empty-state {
        color: #c7d0db;
      }

      .calendar-container.dark-mode .event,
      .calendar-container.dark-mode .week-compact-event,
      .calendar-container.dark-mode .week-standard-event,
      .calendar-container.dark-mode .all-day-event,
      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .modal-content,
      .calendar-container.dark-mode .confirm-dialog,
      .calendar-container.dark-mode .form-input,
      .calendar-container.dark-mode .form-select,
      .calendar-container.dark-mode .form-textarea,
      .calendar-container.dark-mode .recurring-options,
      .calendar-container.dark-mode .btn-secondary,
      .calendar-container.dark-mode .day-modal-event {
        background: #3b434d;
        color: #e2e8f0;
        border-color: #606b7b;
        box-shadow: none;
      }

      .calendar-container.dark-mode .modal-header,
      .calendar-container.dark-mode .modal-row {
        border-color: #5b6676;
      }

      .calendar-container.dark-mode .form-checkbox-label,
      .calendar-container.dark-mode .recurrence-end-option,
      .calendar-container.dark-mode .modal-value,
      .calendar-container.dark-mode .form-label {
        color: #d6dee8;
      }

      .calendar-container.dark-mode .form-required {
        color: #f87171;
      }

      .calendar-container.dark-mode .form-input::placeholder,
      .calendar-container.dark-mode .form-textarea::placeholder {
        color: #9aa6b8;
      }

      .calendar-container.dark-mode input[type="date"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="datetime-local"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="time"]::-webkit-calendar-picker-indicator {
        filter: invert(1) brightness(0.9);
      }

      .calendar-container.dark-mode .btn-secondary {
        border: 1px solid #606b7b;
      }

      .calendar-container.dark-mode .info-banner {
        background: #5a4a34;
        border-color: #8f7a56;
        color: #f3e5c7;
      }

      .calendar-container.dark-mode .view-mode-buttons,
      .calendar-container.dark-mode .add-event-button,
      .calendar-container.dark-mode .compact-add-event-button,
      .calendar-container.dark-mode .nav-button,
      .calendar-container.dark-mode .today-button,
      .calendar-container.dark-mode .theme-toggle {
        background: rgba(226, 232, 240, 0.14);
        border-color: rgba(226, 232, 240, 0.28);
      }

      .calendar-container.dark-mode .view-mode-button.active {
        background: rgba(226, 232, 240, 0.24);
      }

      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-header {
        background: #3b434d;
      }

      .calendar-container.dark-mode .week-standard-event-time,
      .calendar-container.dark-mode .event-time {
        color: rgba(255, 255, 255, 0.92);
      }


      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .week-standard-container,
      .calendar-container.custom-background .calendar-badges,
      .calendar-container.custom-background .day-header,
      .calendar-container.custom-background .day-cell,
      .calendar-container.custom-background .week-day-column,
      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-column,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .all-day-events,
      .calendar-container.custom-background .day-time-slot,
      .calendar-container.custom-background .time-slot,
      .calendar-container.custom-background .time-slot-label,
      .calendar-container.custom-background .empty-state {
        background: transparent !important;
      }

      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .all-day-events,
      .calendar-container.custom-background .day-time-slot,
      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .calendar-badges {
        border-color: rgba(255, 255, 255, 0.35) !important;
      }

      .calendar-container.custom-background .calendar-badges-container.has-overflow::after,
      .calendar-container.custom-background .calendar-badges-container.has-overflow::before {
        display: none;
      }


      .calendar-container.custom-background .day-cell.other-month {
        background: rgba(255, 255, 255, 0.12) !important;
      }

      .calendar-container.dark-mode.custom-background .day-cell.other-month {
        background: rgba(0, 0, 0, 0.2) !important;
      }
      
      @media (max-width: 768px) {
        .header {
          flex-direction: column;
          align-items: stretch;
        }

        .header-controls {
          justify-content: space-between;
        }

        .compact-header-controls {
          justify-content: flex-start;
        }

        .period-controls,
        .compact-period-controls {
          width: 100%;
          justify-content: space-between;
          gap: 8px;
          margin-left: 0;
        }

        .period-controls .month-year,
        .compact-period-controls .month-year {
          flex: 1;
          text-align: center;
        }
        
        .month-year {
          min-width: auto;
        }
        
        .week-standard-container {
          font-size: 10px;
        }
        
        .week-standard-day-date {
          font-size: 14px;
        }
        
        .form-row {
          grid-template-columns: 1fr;
        }
      }
    `;
  }

  render() {
    const today = new Date();
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();

    const headerColorStyle = this._config.header_color
      ? `--header-background: ${this._config.header_color};`
      : '';
    const normalizedBackgroundImageUrl = this.normalizeBackgroundImageUrl(this._config.background_image_url);
    const safeBackgroundImageUrl = normalizedBackgroundImageUrl
      ? String(normalizedBackgroundImageUrl).replace(/[\'\\]/g, '\\$&')
      : null;
    const backgroundImageStyle = safeBackgroundImageUrl
      ? `--calendar-background-image: url('${safeBackgroundImageUrl}'); --calendar-background-size: ${this._config.background_image_size}; --calendar-background-position: ${this._config.background_image_position}; --calendar-background-repeat: ${this._config.background_image_repeat};`
      : '';
    const hasCustomBackground = !!(this._config.background_transparent || this._config.background_image_url);
    const backgroundStyle = this._config.background_transparent
      ? '--calendar-background: transparent;'
      : '';
    const containerStyle = `${headerColorStyle} ${backgroundStyle} ${backgroundImageStyle}`.trim();
    
    this.shadowRoot.innerHTML = `
      <style>
        ${this.getStyles()}
      </style>
      
      <div class="calendar-container ${this._isDarkMode ? 'dark-mode' : ''} ${hasCustomBackground ? 'custom-background' : ''}" style="${containerStyle}">
        ${this._config.compact_header ? this.renderCompactHeader() : this.renderStandardHeader()}
        
        ${this.renderCalendarView()}

        <div class="event-modal" id="event-modal">
          <div class="modal-content" id="modal-content">
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
    this.updateCompactHeaderWrapState();
    this.updateCalendarBadgesScrollState();
    this.updateWeekStandardFixedOffsetHeightFromDom();
    this.updateMonthContainerTopInViewportFromDom();
  }

  renderStandardHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0;
    
    return `
      <div class="header">
        <div class="header-left">
          <h2 class="header-title">${this._config.title}</h2>
        </div>
        <div class="header-controls">
          ${canAddEvents ? `<button class="add-event-button" id="add-event-btn"><span class="icon">+</span>${this.t('addEvent')}</button>` : ''}
          ${this.renderThemeToggle()}
          ${this.renderViewModeButtons()}
          <div class="period-controls">
            <button class="nav-button" id="prev-period">‹</button>
            <div class="month-year">${this.getPeriodLabel()}</div>
            <button class="nav-button" id="next-period">›</button>
            <button class="today-button" id="today">${this.t('today')}</button>
          </div>
        </div>
      </div>
    `;
  }

  renderCompactHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0;
    
    return `
      <div class="header header-compact">
        <div class="compact-header-left">
          <h2 class="header-title">${this._config.title}</h2>
          ${this.renderCalendarBadgesInline()}
        </div>
        <div class="header-controls compact-header-controls">
          ${canAddEvents ? `<button class="compact-add-event-button" id="add-event-btn"><span class="icon">+</span>${this.t('addEvent')}</button>` : ''}
          ${this.renderThemeToggle()}
          ${this.renderViewModeButtons()}
          <div class="compact-period-controls">
            <button class="nav-button" id="prev-period">‹</button>
            <div class="month-year">${this.getPeriodLabel()}</div>
            <button class="nav-button" id="next-period">›</button>
            <button class="today-button" id="today">${this.t('today')}</button>
          </div>
        </div>
      </div>
    `;
  }

  renderCalendarBadgesInline() {
    if (!this._config.entities || this._config.entities.length === 0) return '';
    
    return `
      <div class="calendar-badges-inline">
        ${this._config.entities.map((entityId, index) => {
          const name = this.getCalendarName(entityId);
          const color = this._config.colors[entityId] || this.getDefaultColor(index);
          const initial = name.charAt(0).toUpperCase();
          const isHidden = this._hiddenCalendars.has(entityId);
          
          return `
            <div class="calendar-badge calendar-badge-inline ${isHidden ? 'calendar-badge-hidden' : ''}" 
                 data-entity="${entityId}"
                 style="background: ${isHidden ? '#f3f4f6' : this.lightenColor(color, 0.85)}; 
                        border-color: ${isHidden ? '#d1d5db' : color};">
              <div class="calendar-badge-icon" style="background: ${isHidden ? '#9ca3af' : color}">${initial}</div>
              <span class="calendar-badge-name" style="color: ${isHidden ? '#9ca3af' : '#374151'}">${this.escapeHtml(name)}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderViewModeButtons() {
    return `
      <div class="view-mode-buttons">
        <button class="view-mode-button ${this._viewMode === 'month' ? 'active' : ''}" data-view="month">${this.t('month')}</button>
        <button class="view-mode-button ${this._viewMode === 'week-compact' ? 'active' : ''}" data-view="week-compact">${this.t('week')}</button>
        <button class="view-mode-button ${this._viewMode === 'week-standard' ? 'active' : ''}" data-view="week-standard">${this.t('schedule')}</button>
      </div>
    `;
  }

  renderThemeToggle() {
    return `<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">${this._isDarkMode ? '☀︎' : '☾'}</button>`;
  }

  getPeriodLabel() {
    if (this._viewMode === 'month') {
      // If rolling_weeks mode is active, show date range
      if (this._config.rolling_weeks !== null) {
        const anchorDate = new Date(this._currentDate);
        anchorDate.setHours(0, 0, 0, 0);
        
        const currentDay = anchorDate.getDay();
        const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;
        const weekStart = new Date(anchorDate);
        weekStart.setDate(anchorDate.getDate() - diff);
        
        const totalWeeks = this._config.rolling_weeks + 1;
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + (totalWeeks * 7) - 1);
        
        if (weekStart.getMonth() === weekEnd.getMonth() && weekStart.getFullYear() === weekEnd.getFullYear()) {
          return `${this.getMonthNameShort(weekStart.getMonth())} ${weekStart.getDate()}-${weekEnd.getDate()}, ${weekStart.getFullYear()}`;
        } else if (weekStart.getFullYear() === weekEnd.getFullYear()) {
          return `${this.getMonthNameShort(weekStart.getMonth())} ${weekStart.getDate()} - ${this.getMonthNameShort(weekEnd.getMonth())} ${weekEnd.getDate()}, ${weekStart.getFullYear()}`;
        } else {
          return `${this.getMonthNameShort(weekStart.getMonth())} ${weekStart.getDate()}, ${weekStart.getFullYear()} - ${this.getMonthNameShort(weekEnd.getMonth())} ${weekEnd.getDate()}, ${weekEnd.getFullYear()}`;
        }
      }
      
      // Standard month view
      const month = this._currentDate.getMonth();
      const year = this._currentDate.getFullYear();
      return `${this.getMonthNameShort(month)} ${year}`;
    } else {
      const weekDays = this.getWeekDays();
      if (weekDays.length === 0) return '';
      const start = weekDays[0];
      const end = weekDays[weekDays.length - 1];
      if (start.getMonth() === end.getMonth()) {
        if (start.getDate() === end.getDate()) {
          return `${this.getMonthNameShort(start.getMonth())} ${start.getDate()}, ${start.getFullYear()}`;
        } else {
          return `${this.getMonthNameShort(start.getMonth())} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`;
        }
      } else {
        return `${this.getMonthNameShort(start.getMonth())} ${start.getDate()} - ${this.getMonthNameShort(end.getMonth())} ${end.getDate()}, ${start.getFullYear()}`;
      }
    }
  }

  renderCalendarView() {
    if (this._viewMode === 'month') {
      const isCompactMonth = this._config.compact_height;
      const compactMaxHeight = isCompactMonth ? this.getCompactMaxHeight(this._monthContainerTopInViewport) : null;
      const monthWeekRows = this.getMonthWeekRowCount();
      const monthStyle = compactMaxHeight
        ? `height: ${compactMaxHeight}px; overflow-y: auto; grid-template-rows: auto repeat(${monthWeekRows}, minmax(0, 1fr));`
        : '';
      const monthClass = isCompactMonth ? 'calendar-grid compact-month' : 'calendar-grid';

      return `
        ${!this._config.compact_header ? this.renderCalendarBadges() : ''}
        <div class="${monthClass}" style="${monthStyle}">
          ${this.renderDayHeaders()}
          ${this.renderDays()}
        </div>
      `;
    } else if (this._viewMode === 'week-compact') {
      return this.renderWeekCompact();
    } else if (this._viewMode === 'week-standard') {
      return this.renderWeekStandard();
    }
  }

  renderDayHeaders() {
    const days = this.getWeekdayNames('short');
    const firstDay = this._config.firstDayOfWeek;
    const orderedDays = [...days.slice(firstDay), ...days.slice(0, firstDay)];
    
    return orderedDays.map(day => `
      <div class="day-header">${day}</div>
    `).join('');
  }

  renderWeekCompact() {
    const weekDays = this.getWeekDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayNames = this.getWeekdayNames('short');
    
    return `
      ${!this._config.compact_header ? this.renderCalendarBadges() : ''}
      <div class="week-compact-container">
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const events = this.sortEventsForDate(this.getEventsForDay(date), date);
          
          return `
            <div class="week-day-column ${isToday ? 'today' : ''}" data-date="${date.toISOString()}" data-click-target="day-header">
              <div class="week-day-header">
                <div class="week-day-name">${dayNames[date.getDay()]}</div>
                <div class="week-day-date">${date.getDate()}</div>
              </div>
              <div class="week-day-events">
                ${events.map(event => {
                  const daySegment = this.getEventDaySegment(event, date);
                  if (!daySegment) return '';
                  const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
                  const timeLabel = isAllDaySegment
                    ? this.t('allDay')
                    : `${this.formatTime(segmentStart)} - ${this.formatTime(segmentEnd)}`;
                  
                  return `
                    <div class="week-compact-event" style="background: ${event.color}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                      <div class="week-compact-event-time">${timeLabel}</div>
                      <div class="week-compact-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
                    </div>
                  `;
                }).join('')}
                ${events.length === 0 ? `<div style="color: #9ca3af; font-size: 13px; text-align: center; margin-top: 20px;">${this.t('noEvents')}</div>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderWeekStandard() {
    const weekDays = this.getWeekDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startHour = this._config.week_start_hour;
    const endHour = this._config.week_end_hour;
    const hours = [];
    
    for (let h = startHour; h <= endHour; h++) {
      hours.push(h);
    }
    
    const baseHourHeight = 120;
    const preferredHourHeight = baseHourHeight * (this._config.height_scale || 1.0);
    
    const dayNames = this.getWeekdayNames('short');
    
    // Calculate max all-day events across all days
    let maxAllDayEvents = 0;
    weekDays.forEach(date => {
      const dayEvents = this.getEventsForDay(date);
      const allDayCount = dayEvents.filter(event => {
        if (this._hiddenCalendars.has(event.entityId)) return false;
        const daySegment = this.getEventDaySegment(event, date);
        return daySegment ? daySegment.isAllDaySegment : false;
      }).length;
      maxAllDayEvents = Math.max(maxAllDayEvents, allDayCount);
    });
    
    const hasAllDayEvents = maxAllDayEvents > 0;
    const allDayHeight = hasAllDayEvents 
      ? 16 + (maxAllDayEvents * 24) + ((maxAllDayEvents - 1) * 4) + 2
      : 0;

    const compactMaxHeight = this.getCompactMaxHeight(this._weekStandardContainerTopInViewport);
    const fallbackOffsetHeight = 127 + allDayHeight;
    const staticOffsetHeight = this._weekStandardFixedOffsetHeight || fallbackOffsetHeight;
    const availableSlotHeight = compactMaxHeight ? compactMaxHeight - staticOffsetHeight : null;
    const compactHourHeight = availableSlotHeight && availableSlotHeight > 0 ? Math.floor(availableSlotHeight / hours.length) : null;
    const hourHeight = compactHourHeight ? Math.max(20, Math.min(preferredHourHeight, compactHourHeight)) : preferredHourHeight;
    const timelineHeight = hourHeight * hours.length;
    const dayTimeSlotsStyle = `height: ${timelineHeight}px; min-height: ${timelineHeight}px;`;
    const containerStyle = this.getCompactContainerStyle(compactMaxHeight);

    const showCurrentTimeBar = this._config.show_current_time_bar && this.shouldShowCurrentTimeBar(today, startHour, endHour);
    
    return `
      ${!this._config.compact_header ? this.renderCalendarBadges() : ''}
      <div class="week-standard-container" style="${containerStyle}">
        <!-- Time column -->
        <div class="time-column">
          <div class="time-column-header-spacer"></div>
          ${hasAllDayEvents ? `<div class="time-column-allday-spacer" style="height: ${allDayHeight}px;"></div>` : ''}
          <div class="time-column-extra-spacer"></div>
          ${hours.map(hour => `
            <div class="time-slot" style="height: ${hourHeight}px;">
              <span class="time-slot-label">${this.formatScheduleHour(hour)}</span>
            </div>
          `).join('')}
        </div>
        
        <!-- Day columns -->
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const dayEvents = this.getEventsForDay(date);
          
          return `
            <div class="week-standard-day-column ${isToday ? 'today' : ''}" data-date="${date.toISOString()}">
              <div class="week-standard-day-header" data-click-target="day-header">
                <div class="week-standard-day-name">${dayNames[date.getDay()]}</div>
                <div class="week-standard-day-date">${date.getDate()}</div>
              </div>
              ${hasAllDayEvents ? this.renderAllDayEventsForDay(dayEvents, date, allDayHeight) : ''}
              <div class="day-time-slots" style="${dayTimeSlotsStyle}">
                ${hours.map(hour => `
                  <div class="day-time-slot" style="height: ${hourHeight}px;" data-hour="${hour}"></div>
                `).join('')}
                ${showCurrentTimeBar && isToday ? this.renderCurrentTimeLine(startHour, hourHeight) : ''}
                ${this.renderTimedEventsForDay(dayEvents, date, startHour, endHour, hourHeight)}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderCalendarBadges() {
    if (!this._config.entities || this._config.entities.length === 0) return '';
    
    return `
      <div class="calendar-badges-container">
        <div class="calendar-badges">
          ${this._config.entities.map((entityId, index) => {
            const name = this.getCalendarName(entityId);
            const color = this._config.colors[entityId] || this.getDefaultColor(index);
            const initial = name.charAt(0).toUpperCase();
            const isHidden = this._hiddenCalendars.has(entityId);
            
            return `
              <div class="calendar-badge ${isHidden ? 'calendar-badge-hidden' : ''}" 
                   data-entity="${entityId}"
                   style="background: ${isHidden ? '#f3f4f6' : this.lightenColor(color, 0.85)}; 
                          border-color: ${isHidden ? '#d1d5db' : color};
                          cursor: pointer;">
                <div class="calendar-badge-icon" style="background: ${isHidden ? '#9ca3af' : color}">${initial}</div>
                <span class="calendar-badge-name" style="color: ${isHidden ? '#9ca3af' : '#374151'}">${this.escapeHtml(name)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  renderAllDayEventsForDay(events, date, allDayHeight) {
    const allDayEvents = events.filter(event => {
      if (this._hiddenCalendars.has(event.entityId)) {
        return false;
      }

      const daySegment = this.getEventDaySegment(event, date);
      return daySegment ? daySegment.isAllDaySegment : false;
    });
    
    return `
      <div class="all-day-events" style="min-height: ${allDayHeight}px; height: ${allDayHeight}px;">
        ${allDayEvents.length > 0 ? allDayEvents.map(event => {
          const bgColor = event.color;
          return `
            <div class="all-day-event" 
                 style="background: ${bgColor}; border-left: 4px solid ${event.color}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};"
                 data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="all-day-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
            </div>
          `;
        }).join('') : ''}
      </div>
    `;
  }

  renderTimedEventsForDay(events, date, startHour, endHour, hourHeight) {
    const timedEvents = events.map(event => {
      if (this._hiddenCalendars.has(event.entityId)) {
        return null;
      }
      const daySegment = this.getEventDaySegment(event, date);
      if (!daySegment || daySegment.isAllDaySegment) {
        return null;
      }
      return { event, daySegment };
    }).filter(Boolean);
    
    // Process timed events for overlaps
    const eventBlocks = timedEvents.map(({ event, daySegment }) => {
      const { segmentStart, segmentEnd } = daySegment;
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());

      const startHourFloat = (segmentStart.getTime() - dayStart.getTime()) / 3600000;
      const endHourFloat = (segmentEnd.getTime() - dayStart.getTime()) / 3600000;
      
      return {
        event,
        eventStart: segmentStart,
        eventEnd: segmentEnd,
        startHourFloat,
        endHourFloat,
        startMinutes: Math.round(startHourFloat * 60),
        endMinutes: Math.round(endHourFloat * 60)
      };
    }).filter(block => block.endHourFloat > startHour && block.startHourFloat < (endHour + 1));
    
    // Sort by start time, then by duration (longer first)
    eventBlocks.sort((a, b) => {
      if (a.startMinutes !== b.startMinutes) {
        return a.startMinutes - b.startMinutes;
      }
      return (b.endMinutes - b.startMinutes) - (a.endMinutes - a.startMinutes);
    });
    
    const overlaps = (first, second) =>
      first.startMinutes < second.endMinutes && first.endMinutes > second.startMinutes;

    const clusters = [];
    eventBlocks.forEach(block => {
      const matchingClusters = [];
      clusters.forEach((cluster, index) => {
        if (cluster.some(other => overlaps(block, other))) {
          matchingClusters.push(index);
        }
      });

      if (matchingClusters.length === 0) {
        clusters.push([block]);
        return;
      }

      const targetIndex = matchingClusters.shift();
      clusters[targetIndex].push(block);

      matchingClusters.reverse().forEach(index => {
        clusters[targetIndex].push(...clusters[index]);
        clusters.splice(index, 1);
      });
    });

    clusters.forEach(cluster => {
      const columns = [];
      cluster.forEach(block => {
        let placed = false;
        for (const col of columns) {
          const hasOverlap = col.some(other => overlaps(block, other));
          if (!hasOverlap) {
            col.push(block);
            block.column = columns.indexOf(col);
            placed = true;
            break;
          }
        }

        if (!placed) {
          columns.push([block]);
          block.column = columns.length - 1;
        }
      });

      const clusterColumns = columns.length;
      cluster.forEach(block => {
        block.clusterColumns = clusterColumns;
      });
    });
    
    // Render timed events
    return eventBlocks.map(block => {
      const { event, eventStart, eventEnd, startHourFloat, endHourFloat, column } = block;

      const clampedStartHour = Math.max(startHourFloat, startHour);
      const clampedEndHour = Math.min(endHourFloat, endHour + 1);
      if (clampedEndHour <= clampedStartHour) {
        return '';
      }
      
      const duration = clampedEndHour - clampedStartHour;
      const top = (clampedStartHour - startHour) * hourHeight;
      const height = duration * hourHeight;
      
      const clusterColumns = block.clusterColumns || 1;
      // Calculate width and position for concurrent events
      const width = clusterColumns > 1 ? `calc((100% - 16px) / ${clusterColumns})` : 'calc(100% - 16px)';
      const left = clusterColumns > 1 ? `calc(8px + ((100% - 16px) / ${clusterColumns}) * ${column})` : '8px';
      
      const bgColor = event.color;
      
      return `
        <div class="week-standard-event" 
             style="top: ${top}px; height: ${height}px; width: ${width}; left: ${left}; background: ${bgColor}; border-left: 4px solid ${event.color}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};"
             data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
          <div class="week-standard-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
          ${this.shouldShowEventTime(event) ? `<div class="week-standard-event-time">${this.formatScheduleTime(eventStart)} - ${this.formatScheduleTime(eventEnd)}</div>` : ''}
          ${this.renderEventIcon(event)}
        </div>
      `;
    }).join('');
  }

  renderEventIcon(event) {
    if (this._config.hide_event_calendar_bubble) {
      return '';
    }

    // Get the initials or icon based on calendar
    const entityId = event.entityId;
    const name = this.getCalendarName(entityId);
    const initial = name.charAt(0).toUpperCase();
    
    return `<div class="week-standard-event-icon" style="background: ${event.color}; color: white;">${initial}</div>`;
  }


  lightenColor(color, amount) {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Lighten by blending with white
    const nr = Math.round(r + (255 - r) * amount);
    const ng = Math.round(g + (255 - g) * amount);
    const nb = Math.round(b + (255 - b) * amount);
    
    return `rgb(${nr}, ${ng}, ${nb})`;
  }

  getEventBubbleFontSize() {
    const configuredSize = this._config?.event_font_size;
    if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
      return '11px';
    }

    if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
      return `${configuredSize}px`;
    }

    const normalized = String(configuredSize).trim();
    if (!normalized) return '11px';
    return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
  }

  getEventBubbleFontColor(event) {
    const entityId = event?.entityId;
    if (!entityId) return 'white';
    const configuredColor = this._config?.event_font_colors?.[entityId];
    return configuredColor || 'white';
  }

  shouldShowEventTime(event) {
    if (!event || !event.entityId) return true;
    return !this._config.hide_times_for_calendars.includes(event.entityId);
  }

  shouldShowCurrentTimeBar(today, startHour, endHour) {
    const now = new Date();
    now.setSeconds(0, 0);
    if (now.toDateString() !== today.toDateString()) {
      return false;
    }

    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    return currentHourFloat >= startHour && currentHourFloat <= (endHour + 1);
  }

  renderCurrentTimeLine(startHour, hourHeight) {
    const now = new Date();
    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    const top = (currentHourFloat - startHour) * hourHeight;
    return `<div class="current-time-line" style="top: ${top}px;"></div>`;
  }

  formatScheduleHour(hour) {
    const date = new Date(2020, 0, 1, hour, 0, 0, 0);
    return this.formatScheduleTime(date);
  }

  formatScheduleTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), {
      hour: 'numeric',
      minute: '2-digit',
      hour12: !this._config.use_24hr_schedule
    }).format(date);
  }

  getMonthWeekRowCount() {
    if (this._config.rolling_weeks !== null && this._viewMode === 'month') {
      return this._config.rolling_weeks + 1;
    }

    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = (firstDay - this._config.firstDayOfWeek + 7) % 7;
    return Math.ceil((startDay + daysInMonth) / 7);
  }

  getEventBubbleFontSizePx() {
    const fallbackPx = 11;
    const sizeValue = this.getEventBubbleFontSize();

    if (typeof window === 'undefined' || !this.shadowRoot) {
      const parsed = parseFloat(sizeValue);
      return Number.isFinite(parsed) ? parsed : fallbackPx;
    }

    const probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.fontSize = sizeValue;
    probe.style.lineHeight = 'normal';
    probe.textContent = 'M';
    this.shadowRoot.appendChild(probe);

    const computedFontSize = parseFloat(window.getComputedStyle(probe).fontSize);
    probe.remove();

    return Number.isFinite(computedFontSize) ? computedFontSize : fallbackPx;
  }

  getMonthEventRowHeight() {
    const fontSizePx = this.getEventBubbleFontSizePx();
    const lineHeightPx = fontSizePx * 1.2;
    const verticalPaddingPx = 8; // .event has 4px top + 4px bottom padding
    const marginBottomPx = 3; // .event margin-bottom in month view
    return Math.ceil(lineHeightPx + verticalPaddingPx + marginBottomPx);
  }

  renderDays() {
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    
    // If rolling_weeks is set, show current week + N additional weeks
    if (this._config.rolling_weeks !== null && this._viewMode === 'month') {
      return this.renderRollingWeeks();
    }
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const today = new Date();
    const isToday = (d) => {
      return d.getDate() === today.getDate() &&
             d.getMonth() === today.getMonth() &&
             d.getFullYear() === today.getFullYear();
    };

    let html = '';
    const startDay = (firstDay - this._config.firstDayOfWeek + 7) % 7;
    
    // Previous month days
    for (let i = startDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(year, month - 1, day);
      html += this.renderDay(day, date, true);
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      html += this.renderDay(day, date, false);
    }
    
    // Next month days
    const totalCells = startDay + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(year, month + 1, day);
      html += this.renderDay(day, date, true);
    }
    
    return html;
  }

  renderRollingWeeks() {
    const anchorDate = new Date(this._currentDate);
    anchorDate.setHours(0, 0, 0, 0);
    
    // Find the start of the current week based on firstDayOfWeek
    const currentDay = anchorDate.getDay();
    const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;
    const weekStart = new Date(anchorDate);
    weekStart.setDate(anchorDate.getDate() - diff);
    
    // Calculate total days to show: (rolling_weeks + 1) * 7 days
    const totalWeeks = this._config.rolling_weeks + 1;
    const totalDays = totalWeeks * 7;
    
    let html = '';
    
    // Render all days in the rolling weeks
    for (let i = 0; i < totalDays; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      
      // Check if this day is in a different month than the reference date (for styling)
      const isOtherMonth = date.getMonth() !== this._currentDate.getMonth();
      
      html += this.renderDay(date.getDate(), date, isOtherMonth);
    }
    
    return html;
  }

  getMaxVisibleEventsForMonthDay() {
    const defaultMaxVisible = 3;

    if (this._viewMode !== 'month' || !this._config.compact_height) {
      return defaultMaxVisible;
    }

    const compactMaxHeight = this.getCompactMaxHeight(this._monthContainerTopInViewport);
    if (!compactMaxHeight) {
      return defaultMaxVisible;
    }

    const weekRows = this.getMonthWeekRowCount();
    if (!weekRows || weekRows < 1) {
      return defaultMaxVisible;
    }

    const gridGap = 1;
    const dayHeaderRowHeight = 41;
    const dayCellVerticalPadding = 16; // .day-cell has 8px top + 8px bottom padding
    const dayNumberBlockHeight = 22; // number text + margin-bottom in compact month cell
    const eventRowHeight = this.getMonthEventRowHeight();

    const contentHeight = compactMaxHeight - dayHeaderRowHeight - (weekRows * gridGap);
    const dayCellHeight = Math.floor(contentHeight / weekRows);
    // Do not pre-reserve space for the "+N more" indicator here. Overflow handling
    // swaps one event row for the indicator in renderDay(), so reserving both causes
    // under-counting and hidden space.
    const usableEventHeight = dayCellHeight - dayCellVerticalPadding - dayNumberBlockHeight;
    if (!Number.isFinite(usableEventHeight) || usableEventHeight <= 0) {
      return 1;
    }

    return Math.max(1, Math.floor(usableEventHeight / eventRowHeight));
  }

  renderDay(dayNum, date, isOtherMonth) {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    let dayEvents = this.getEventsForDay(date);
    
    dayEvents = this.sortEventsForDate(dayEvents, date);
    
    const maxVisible = this.getMaxVisibleEventsForMonthDay();
    const hasOverflow = dayEvents.length > maxVisible;
    const visibleEvents = hasOverflow ? Math.max(0, maxVisible - 1) : maxVisible;
    const hiddenEventCount = Math.max(0, dayEvents.length - visibleEvents);

    let classes = 'day-cell';
    if (isOtherMonth) classes += ' other-month';
    if (isToday) classes += ' today';

    return `
      <div class="${classes}" data-date="${date.toISOString()}">
        <div class="day-number">${dayNum}</div>
        ${dayEvents.slice(0, visibleEvents).map(event => this.renderEvent(event, date)).join('')}
        ${hiddenEventCount > 0 ? `<div class="more-events" data-click-target="more-events">${this.t('moreEvents', { count: hiddenEventCount })}</div>` : ''}
      </div>
    `;
  }

  renderEvent(event, date) {
    const daySegment = this.getEventDaySegment(event, date);
    if (!daySegment) return '';
    const { segmentStart, isAllDaySegment } = daySegment;
    
    return `
      <div class="event" style="background: ${event.color}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${!isAllDaySegment ? `<span class="event-time">${this.formatTime(segmentStart)}</span>` : ''}
        ${this.escapeHtml(event.summary || this.t('untitledEvent'))}
      </div>
    `;
  }

  getEventDateTimeInfo(event) {
    if (event.start.dateTime) {
      return {
        eventStart: new Date(event.start.dateTime),
        eventEnd: new Date(event.end.dateTime),
        isAllDay: false
      };
    }

    if (event.start.date) {
      return {
        eventStart: new Date(event.start.date + 'T00:00:00'),
        eventEnd: new Date(event.end.date + 'T00:00:00'),
        isAllDay: true
      };
    }

    const isAllDay = !event.start.includes('T');
    return {
      eventStart: new Date(event.start),
      eventEnd: new Date(event.end),
      isAllDay
    };
  }

  getEventDaySegment(event, date) {
    const { eventStart, eventEnd, isAllDay } = this.getEventDateTimeInfo(event);

    const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const nextDayStart = new Date(dayStart);
    nextDayStart.setDate(nextDayStart.getDate() + 1);

    if (eventEnd <= dayStart || eventStart >= nextDayStart) {
      return null;
    }

    const segmentStart = new Date(Math.max(eventStart.getTime(), dayStart.getTime()));
    const segmentEnd = new Date(Math.min(eventEnd.getTime(), nextDayStart.getTime()));
    const isAllDaySegment = isAllDay || (
      segmentStart.getTime() === dayStart.getTime() &&
      segmentEnd.getTime() === nextDayStart.getTime()
    );

    return {
      eventStart,
      eventEnd,
      segmentStart,
      segmentEnd,
      isAllDay,
      isAllDaySegment,
      startsOnDay: eventStart >= dayStart && eventStart < nextDayStart,
      endsOnDay: eventEnd > dayStart && eventEnd <= nextDayStart
    };
  }

  sortEventsForDate(events, date) {
    return [...events].sort((a, b) => {
      const aSegment = this.getEventDaySegment(a, date);
      const bSegment = this.getEventDaySegment(b, date);

      if (!aSegment && !bSegment) return 0;
      if (!aSegment) return 1;
      if (!bSegment) return -1;

      if (aSegment.isAllDaySegment && !bSegment.isAllDaySegment) return -1;
      if (!aSegment.isAllDaySegment && bSegment.isAllDaySegment) return 1;

      return aSegment.segmentStart - bSegment.segmentStart;
    });
  }

  getEventsForDay(date) {
    return this._events.filter(event => {
      // Filter out events from hidden calendars
      if (this._hiddenCalendars.has(event.entityId)) {
        return false;
      }
      
      return this.getEventDaySegment(event, date) !== null;
    });
  }

  attachEventListeners() {
    const prevButton = this.shadowRoot.getElementById('prev-period');
    const nextButton = this.shadowRoot.getElementById('next-period');
    const todayButton = this.shadowRoot.getElementById('today');
    const addEventButton = this.shadowRoot.getElementById('add-event-btn');
    const themeToggleButton = this.shadowRoot.getElementById('theme-toggle');
    const modal = this.shadowRoot.getElementById('event-modal');
    
    // View mode buttons
    this.shadowRoot.querySelectorAll('.view-mode-button').forEach(button => {
      button.addEventListener('click', () => {
        this._viewMode = button.getAttribute('data-view');
        this.setWeekStart();
        this.ensureEventsForCurrentRange({ renderIfCovered: true });
      });
    });
    
    const calendarBadgesStrip = this.shadowRoot.querySelector('.calendar-badges');
    if (calendarBadgesStrip) {
      calendarBadgesStrip.addEventListener('scroll', () => this.updateCalendarBadgesScrollState(), { passive: true });
    }

    // Calendar badge toggle (both regular and inline)
    this.shadowRoot.querySelectorAll('.calendar-badge, .calendar-badge-inline').forEach(badge => {
      badge.addEventListener('click', (e) => {
        const entityId = badge.getAttribute('data-entity');
        if (this._hiddenCalendars.has(entityId)) {
          this._hiddenCalendars.delete(entityId);
        } else {
          this._hiddenCalendars.add(entityId);
        }
        this.persistPreferences();
        this.render();
      });
    });
    
    // Add event button
    addEventButton?.addEventListener('click', () => {
      this.showCreateEventModal();
    });

    themeToggleButton?.addEventListener('click', () => {
      this._isDarkMode = !this._isDarkMode;
      this.persistPreferences();
      this.render();
    });
    
    prevButton?.addEventListener('click', () => {
      if (this._viewMode === 'month') {
        if (this._config.rolling_weeks !== null) {
          // In rolling weeks mode, go back by the number of weeks shown
          const weeksToAdvance = this._config.rolling_weeks + 1;
          this._currentDate.setDate(this._currentDate.getDate() - (weeksToAdvance * 7));
        } else {
          // Standard month navigation
          this._currentDate.setMonth(this._currentDate.getMonth() - 1);
        }
      } else {
        // In rolling-days mode, advance by rolling days + 1, otherwise by 7
        const rollingDays = this.getRollingDaysForView();
        const daysToAdvance = rollingDays !== null
          ? rollingDays + 1
          : 7;
        this._currentDate.setDate(this._currentDate.getDate() - daysToAdvance);
        if (rollingDays === null) {
          this.setWeekStart();
        }
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });
    
    nextButton?.addEventListener('click', () => {
      if (this._viewMode === 'month') {
        if (this._config.rolling_weeks !== null) {
          // In rolling weeks mode, go forward by the number of weeks shown
          const weeksToAdvance = this._config.rolling_weeks + 1;
          this._currentDate.setDate(this._currentDate.getDate() + (weeksToAdvance * 7));
        } else {
          // Standard month navigation
          this._currentDate.setMonth(this._currentDate.getMonth() + 1);
        }
      } else {
        // In rolling-days mode, advance by rolling days + 1, otherwise by 7
        const rollingDays = this.getRollingDaysForView();
        const daysToAdvance = rollingDays !== null
          ? rollingDays + 1
          : 7;
        this._currentDate.setDate(this._currentDate.getDate() + daysToAdvance);
        if (rollingDays === null) {
          this.setWeekStart();
        }
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });
    
    todayButton?.addEventListener('click', () => {
      this._currentDate = new Date();
      if (this.getRollingDaysForView() === null) {
        this.setWeekStart();
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });
    
    // Event click handlers for all view modes
    this.shadowRoot.querySelectorAll('.event, .week-compact-event, .week-standard-event, .all-day-event').forEach(eventEl => {
      eventEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventData = JSON.parse(eventEl.getAttribute('data-event'));
        this.showEventModal(eventData);
      });
    });
    
    // +N more click handlers (month view)
    this.shadowRoot.querySelectorAll('.more-events').forEach(moreEl => {
      moreEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const dayEl = moreEl.closest('.day-cell');
        if (!dayEl) return;

        const date = new Date(dayEl.getAttribute('data-date'));
        const events = this.getEventsForDay(date);

        if (events.length > 0) {
          this.showDayCompactModal(date, events);
        }
      });
    });

    // Day click handlers (month view only)
    this.shadowRoot.querySelectorAll('.day-cell').forEach(dayEl => {
      dayEl.addEventListener('click', (e) => {
        // Don't open if clicking on an event
        if (e.target.classList.contains('event') || e.target.closest('.event')) {
          return;
        }
        
        const date = new Date(dayEl.getAttribute('data-date'));
        
        // If event management is enabled, show create modal
        if (this._config.enable_event_management && this.getWritableCalendars().length > 0) {
          this.showCreateEventModal(date);
        } else {
          // Otherwise show events for that day
          const events = this.getEventsForDay(date);
          if (events.length > 0) {
            this.showDayModal(date, events);
          }
        }
      });
    });
    
    // Time slot click handlers (schedule view)
    this.shadowRoot.querySelectorAll('.day-time-slot').forEach(slotEl => {
      slotEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }
        
        // Get the date and hour from the parent column
        const column = slotEl.closest('.week-standard-day-column');
        const date = new Date(column.getAttribute('data-date'));
        const hour = parseInt(slotEl.getAttribute('data-hour'));
        
        // Set the time on the date
        date.setHours(hour, 0, 0, 0);
        
        this.showCreateEventModal(date);
      });
    });
    
    // Day header click handlers (week views)
    this.shadowRoot.querySelectorAll('[data-click-target="day-header"]').forEach(headerEl => {
      headerEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }
        
        const column = headerEl.closest('[data-date]');
        const date = new Date(column.getAttribute('data-date'));
        
        this.showCreateEventModal(date);
      });
    });
    
    // Modal close
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (this._activeModalBackHandler) {
          const backHandler = this._activeModalBackHandler;
          this._activeModalBackHandler = null;
          backHandler();
        } else {
          modal.classList.remove('show');
        }
      }
    });
  }

  getRecurrenceWeekdayOptions() {
    return [
      { key: 'MO', label: 'Mon' },
      { key: 'TU', label: 'Tue' },
      { key: 'WE', label: 'Wed' },
      { key: 'TH', label: 'Thu' },
      { key: 'FR', label: 'Fri' },
      { key: 'SA', label: 'Sat' },
      { key: 'SU', label: 'Sun' }
    ];
  }

  buildRRuleFromInputs({ frequency, interval, untilDate, count, byDay }) {
    const parts = [`FREQ=${frequency}`];
    const parsedInterval = parseInt(interval, 10);

    if (!Number.isNaN(parsedInterval) && parsedInterval > 1) {
      parts.push(`INTERVAL=${parsedInterval}`);
    }

    if (Array.isArray(byDay) && byDay.length > 0) {
      parts.push(`BYDAY=${byDay.join(',')}`);
    }

    const parsedCount = parseInt(count, 10);
    if (!Number.isNaN(parsedCount) && parsedCount > 0) {
      parts.push(`COUNT=${parsedCount}`);
    } else if (untilDate) {
      const until = new Date(`${untilDate}T23:59:59`);
      if (!Number.isNaN(until.getTime())) {
        const compactUntil = until.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        parts.push(`UNTIL=${compactUntil}`);
      }
    }

    return parts.join(';');
  }

  parseRRule(rrule = '') {
    const parsed = {
      frequency: 'DAILY',
      interval: '1',
      count: '',
      untilDate: '',
      byDay: []
    };

    if (!rrule || typeof rrule !== 'string') {
      return parsed;
    }

    const ruleWithoutPrefix = rrule.replace(/^RRULE:/i, '');
    const segments = ruleWithoutPrefix.split(';');

    segments.forEach((segment) => {
      const [rawKey, rawValue] = segment.split('=');
      const key = (rawKey || '').toUpperCase();
      const value = (rawValue || '').trim();

      if (!key || !value) {
        return;
      }

      if (key === 'FREQ') {
        parsed.frequency = value.toUpperCase();
      } else if (key === 'INTERVAL') {
        parsed.interval = value;
      } else if (key === 'COUNT') {
        parsed.count = value;
      } else if (key === 'BYDAY') {
        parsed.byDay = value.split(',').map((day) => day.trim()).filter(Boolean);
      } else if (key === 'UNTIL') {
        const untilCompact = value.replace(/Z$/, '');
        if (/^\d{8}/.test(untilCompact)) {
          parsed.untilDate = `${untilCompact.slice(0, 4)}-${untilCompact.slice(4, 6)}-${untilCompact.slice(6, 8)}`;
        }
      }
    });

    return parsed;
  }

  getRecurrenceEndMode(recurrenceData = {}) {
    if (recurrenceData.count) return 'after';
    if (recurrenceData.untilDate) return 'on';
    return 'never';
  }

  syncRecurrenceEndInputs() {
    const selected = this.shadowRoot.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
    const untilInput = this.shadowRoot.getElementById('event-recurrence-until');
    const countInput = this.shadowRoot.getElementById('event-recurrence-count');

    if (!untilInput || !countInput) return;

    if (selected === 'on') {
      untilInput.disabled = false;
      countInput.disabled = true;
      countInput.value = '';
    } else if (selected === 'after') {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = false;
    } else {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = true;
      countInput.value = '';
    }
  }

  setupStartEndDurationSync({ startInputId, endInputId, isDateOnly = false }) {
    const startInput = this.shadowRoot.getElementById(startInputId);
    const endInput = this.shadowRoot.getElementById(endInputId);
    if (!startInput || !endInput) return;

    const toDate = (value) => {
      if (!value) return null;
      return isDateOnly ? new Date(`${value}T00:00:00`) : new Date(value);
    };

    const fromDate = (date) => {
      if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      if (isDateOnly) {
        return `${year}-${month}-${day}`;
      }
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    let durationMs = 0;
    const recalculateDuration = () => {
      const start = toDate(startInput.value);
      const end = toDate(endInput.value);
      if (!start || !end) return;
      durationMs = end.getTime() - start.getTime();
    };

    recalculateDuration();

    startInput.addEventListener('change', () => {
      const nextStart = toDate(startInput.value);
      if (!nextStart) return;
      const nextEnd = new Date(nextStart.getTime() + durationMs);
      endInput.value = fromDate(nextEnd);
    });

    endInput.addEventListener('change', recalculateDuration);
  }

  showCreateEventModal(defaultDate = null, defaultTime = null) {

    const modal = this.shadowRoot.getElementById('event-modal');
    const content = this.shadowRoot.getElementById('modal-content');
    
    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }
    
    // Set defaults
    const now = new Date();
    const startDate = defaultDate || now;
    const startTime = defaultTime || startDate;
    
    // Round to next half hour for timed events
    if (!defaultDate || defaultDate.getHours() !== 0) {
      const minutes = startTime.getMinutes();
      if (minutes < 30) {
        startTime.setMinutes(30);
      } else {
        startTime.setHours(startTime.getHours() + 1);
        startTime.setMinutes(0);
      }
    }
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);
    
    // End time is 1 hour after start (for timed events)
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 1);
    
    // For all-day events, show same day to user (we'll add +1 when submitting)
    const endDate = new Date(startDate);
    
    // Format for datetime-local input
    const formatDateTimeLocal = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };
    
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('createEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="create-event-form">
          <div class="form-group">
            <label class="form-label">
              ${this.t('calendars')}<span class="form-required">*</span>
            </label>
            <div class="form-checkbox-group" style="flex-direction: column; align-items: flex-start; gap: 10px;">
              ${writableCalendars.map((entityId, index) => `
                <label class="form-checkbox-group" style="margin: 0;">
                  <input
                    type="checkbox"
                    class="form-checkbox create-event-calendar"
                    value="${entityId}"
                    ${index === 0 ? 'checked' : ''}
                  />
                  <span class="form-checkbox-label">${this.escapeHtml(this.getCalendarName(entityId))}</span>
                </label>
              `).join('')}
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">
              ${this.t('eventTitle')}<span class="form-required">*</span>
            </label>
            <input type="text" class="form-input" id="event-title" placeholder="${this.t('eventTitlePlaceholder')}" required />
          </div>
          
          <div class="form-group">
            <div class="form-checkbox-group">
              <input type="checkbox" class="form-checkbox" id="event-all-day" />
              <label class="form-checkbox-label" for="event-all-day">${this.t('allDayEvent')}</label>
            </div>
          </div>

          <div class="form-group">
            <div class="form-checkbox-group">
              <input type="checkbox" class="form-checkbox" id="event-recurring" />
              <label class="form-checkbox-label" for="event-recurring">${this.t('recurring')}</label>
            </div>
          </div>

          <div id="recurring-event-fields" style="display: none;">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('recurrenceFrequency')}</label>
                <select class="form-select" id="event-recurrence-frequency">
                  <option value="DAILY">${this.t('recurrenceDaily')}</option>
                  <option value="WEEKLY">${this.t('recurrenceWeekly')}</option>
                  <option value="MONTHLY">${this.t('recurrenceMonthly')}</option>
                  <option value="YEARLY">${this.t('recurrenceYearly')}</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${this.t('recurrenceEvery')}</label>
                <input type="number" class="form-input" id="event-recurrence-interval" min="1" value="1" />
              </div>
            </div>
            <div class="form-group" id="event-recurrence-weekdays-group" style="display: none;">
              <label class="form-label">${this.t('recurrenceWeekdays')}</label>
              <div class="form-checkbox-group" style="flex-wrap: wrap; gap: 10px;">
                ${this.getRecurrenceWeekdayOptions().map(day => `
                  <label class="form-checkbox-label" style="display:flex;align-items:center;gap:6px;">
                    <input type="checkbox" class="form-checkbox event-recurrence-weekday" value="${day.key}" />
                    <span>${day.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label recurrence-ends-label">${this.t('recurrenceEndsOn')}</label>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-never">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-never" value="never" checked />
                  <span>${this.t('recurrenceNever')}</span>
                </label>
                <div></div>
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-on">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-on" value="on" />
                  <span>${this.t('recurrenceOn')}</span>
                </label>
                <input type="date" class="form-input" id="event-recurrence-until" disabled />
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-after">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-after" value="after" />
                  <span>${this.t('recurrenceAfter')}</span>
                </label>
                <div class="recurrence-after-input">
                  <input type="number" class="form-input" id="event-recurrence-count" min="1" placeholder="13" disabled />
                  <span>${this.t('recurrenceOccurrences')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div id="timed-event-fields">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('start')}</label>
                <input type="datetime-local" class="form-input" id="event-start" 
                       value="${formatDateTimeLocal(startTime)}" required />
              </div>
              
              <div class="form-group">
                <label class="form-label">${this.t('end')}</label>
                <input type="datetime-local" class="form-input" id="event-end" 
                       value="${formatDateTimeLocal(endTime)}" required />
              </div>
            </div>
          </div>
          
          <div id="all-day-event-fields" style="display: none;">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('startDate')}</label>
                <input type="date" class="form-input" id="event-start-date" 
                       value="${formatDate(startDate)}" />
              </div>
              
              <div class="form-group">
                <label class="form-label">${this.t('endDate')}</label>
                <input type="date" class="form-input" id="event-end-date" 
                       value="${formatDate(endDate)}" />
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">${this.t('location')}</label>
            <input type="text" class="form-input" id="event-location" placeholder="${this.t('locationPlaceholder')}" />
          </div>
          
          <div class="form-group">
            <label class="form-label">${this.t('description')}</label>
            <textarea class="form-textarea" id="event-description" placeholder="${this.t('descriptionPlaceholder')}"></textarea>
          </div>
          
          <div id="form-error" class="error-message" style="display: none;"></div>
          
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${this.t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${this.t('createEvent')}</button>
          </div>
        </form>
      </div>
    `;
    
    modal.classList.add('show');
    
    // Event listeners
    const form = this.shadowRoot.getElementById('create-event-form');
    const allDayCheckbox = this.shadowRoot.getElementById('event-all-day');
    const recurringCheckbox = this.shadowRoot.getElementById('event-recurring');
    const recurrenceFrequency = this.shadowRoot.getElementById('event-recurrence-frequency');
    const timedFields = this.shadowRoot.getElementById('timed-event-fields');
    const allDayFields = this.shadowRoot.getElementById('all-day-event-fields');
    const recurringFields = this.shadowRoot.getElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.shadowRoot.getElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this.shadowRoot.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.shadowRoot.getElementById('form-error');
    
    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });
    
    // Close button
    this.shadowRoot.getElementById('close-modal').addEventListener('click', () => {
      modal.classList.remove('show');
    });
    
    // Cancel button
    this.shadowRoot.getElementById('cancel-btn').addEventListener('click', () => {
      modal.classList.remove('show');
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const selectedCalendarIds = Array.from(this.shadowRoot.querySelectorAll('.create-event-calendar:checked'))
        .map((input) => input.value);
      const title = this.shadowRoot.getElementById('event-title').value.trim();
      const isAllDay = this.shadowRoot.getElementById('event-all-day').checked;
      const location = this.shadowRoot.getElementById('event-location').value.trim();
      const description = this.shadowRoot.getElementById('event-description').value.trim();

      if (selectedCalendarIds.length === 0) {
        this.showFormError(errorDiv, this.t('noWritableCalendars'));
        return;
      }
      
      if (!title) {
        this.showFormError(errorDiv, this.t('eventTitleRequired'));
        return;
      }
      
      let eventData = {
        summary: title,
        location: location || undefined,
        description: description || undefined
      };
      
      if (isAllDay) {
        const startDate = this.shadowRoot.getElementById('event-start-date').value;
        const endDate = this.shadowRoot.getElementById('event-end-date').value;
        
        if (!startDate || !endDate) {
          this.showFormError(errorDiv, this.t('startEndDatesRequired'));
          return;
        }
        
        // Validate that end date is on or after start date
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        if (end < start) {
          this.showFormError(errorDiv, this.t('endDateBeforeStart'));
          return;
        }
        
        // For Home Assistant, end date is exclusive, so add 1 day
        const exclusiveEndDate = new Date(end);
        exclusiveEndDate.setDate(exclusiveEndDate.getDate() + 1);
        const exclusiveEndDateStr = exclusiveEndDate.toISOString().split('T')[0];
        
        eventData.start = { date: startDate };
        eventData.end = { date: exclusiveEndDateStr };
      } else {
        const startDateTime = this.shadowRoot.getElementById('event-start').value;
        const endDateTime = this.shadowRoot.getElementById('event-end').value;
        
        if (!startDateTime || !endDateTime) {
          this.showFormError(errorDiv, this.t('startEndTimesRequired'));
          return;
        }
        
        // Convert to ISO format
        const start = new Date(startDateTime);
        const end = new Date(endDateTime);
        
        if (end <= start) {
          this.showFormError(errorDiv, this.t('endTimeBeforeStart'));
          return;
        }
        
        eventData.start = { dateTime: start.toISOString() };
        eventData.end = { dateTime: end.toISOString() };
      }

      if (recurringCheckbox.checked) {
        const frequency = this.shadowRoot.getElementById('event-recurrence-frequency').value;
        const interval = this.shadowRoot.getElementById('event-recurrence-interval').value;
        const untilDateRaw = this.shadowRoot.getElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.shadowRoot.getElementById('event-recurrence-count').value;
        const recurrenceEndMode = this.shadowRoot.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this.shadowRoot.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);

        if (frequency === 'WEEKLY' && byDay.length === 0) {
          this.showFormError(errorDiv, this.t('recurrenceSelectWeekday'));
          return;
        }

        eventData.rrule = this.buildRRuleFromInputs({
          frequency,
          interval,
          untilDate,
          count: recurrenceCount,
          byDay: frequency === 'WEEKLY' ? byDay : []
        });
      }
      
      // Disable submit button
      const submitBtn = this.shadowRoot.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('creating');
      
      try {
        await Promise.all(selectedCalendarIds.map((calendarId) => this.createEvent(calendarId, eventData)));
        modal.classList.remove('show');
        
        // Refresh events
        this._lastFetch = null;
        await this.updateEvents();
      } catch (error) {
        console.error('Failed to create event:', error);
        this.showFormError(errorDiv, error.message || this.t('failedCreateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('createEvent');
      }
    });
    
    // Focus on title input
    setTimeout(() => {
      this.shadowRoot.getElementById('event-title')?.focus();
    }, 100);
  }

  showEditEventModal(event, startDate, endDate, isAllDay, editScope = 'this') {
    const modal = this.shadowRoot.getElementById('event-modal');
    const content = this.shadowRoot.getElementById('modal-content');
    
    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }
    
    // Format for datetime-local input
    const formatDateTimeLocal = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };
    
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const recurrenceData = this.parseRRule(event.rrule || '');
    const isRecurring = !!event.rrule;
    
    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('editEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="edit-event-form">
          <div class="form-group">
            <label class="form-label">
              ${this.t('calendar')}<span class="form-required">*</span>
            </label>
            <select class="form-select" id="event-calendar" required>
              ${writableCalendars.map((entityId) => `
                <option value="${entityId}" ${entityId === event.entityId ? 'selected' : ''}>
                  ${this.escapeHtml(this.getCalendarName(entityId))}
                </option>
              `).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">
              ${this.t('eventTitle')}<span class="form-required">*</span>
            </label>
            <input type="text" class="form-input" id="event-title" 
                   placeholder="${this.t('eventTitlePlaceholder')}" 
                   value="${this.escapeHtml(event.summary || '')}" required />
          </div>
          
          <div class="form-group">
            <div class="form-checkbox-group">
              <input type="checkbox" class="form-checkbox" id="event-all-day" ${isAllDay ? 'checked' : ''} />
              <label class="form-checkbox-label" for="event-all-day">${this.t('allDayEvent')}</label>
            </div>
          </div>

          <div class="form-group">
            <div class="form-checkbox-group">
              <input type="checkbox" class="form-checkbox" id="event-recurring" ${isRecurring ? 'checked' : ''} />
              <label class="form-checkbox-label" for="event-recurring">${this.t('recurring')}</label>
            </div>
          </div>

          <div id="recurring-event-fields" style="display: ${isRecurring ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('recurrenceFrequency')}</label>
                <select class="form-select" id="event-recurrence-frequency">
                  <option value="DAILY" ${recurrenceData.frequency === 'DAILY' ? 'selected' : ''}>${this.t('recurrenceDaily')}</option>
                  <option value="WEEKLY" ${recurrenceData.frequency === 'WEEKLY' ? 'selected' : ''}>${this.t('recurrenceWeekly')}</option>
                  <option value="MONTHLY" ${recurrenceData.frequency === 'MONTHLY' ? 'selected' : ''}>${this.t('recurrenceMonthly')}</option>
                  <option value="YEARLY" ${recurrenceData.frequency === 'YEARLY' ? 'selected' : ''}>${this.t('recurrenceYearly')}</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${this.t('recurrenceEvery')}</label>
                <input type="number" class="form-input" id="event-recurrence-interval" min="1" value="${this.escapeHtml(recurrenceData.interval || '1')}" />
              </div>
            </div>
            <div class="form-group" id="event-recurrence-weekdays-group" style="display: ${isRecurring && recurrenceData.frequency === 'WEEKLY' ? 'block' : 'none'};">
              <label class="form-label">${this.t('recurrenceWeekdays')}</label>
              <div class="form-checkbox-group" style="flex-wrap: wrap; gap: 10px;">
                ${this.getRecurrenceWeekdayOptions().map(day => `
                  <label class="form-checkbox-label" style="display:flex;align-items:center;gap:6px;">
                    <input type="checkbox" class="form-checkbox event-recurrence-weekday" value="${day.key}" ${recurrenceData.byDay.includes(day.key) ? 'checked' : ''} />
                    <span>${day.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label recurrence-ends-label">${this.t('recurrenceEndsOn')}</label>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-never">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-never" value="never" ${this.getRecurrenceEndMode(recurrenceData) === 'never' ? 'checked' : ''} />
                  <span>${this.t('recurrenceNever')}</span>
                </label>
                <div></div>
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-on">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-on" value="on" ${this.getRecurrenceEndMode(recurrenceData) === 'on' ? 'checked' : ''} />
                  <span>${this.t('recurrenceOn')}</span>
                </label>
                <input type="date" class="form-input" id="event-recurrence-until" value="${this.escapeHtml(recurrenceData.untilDate || '')}" ${this.getRecurrenceEndMode(recurrenceData) === 'on' ? '' : 'disabled'} />
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-after">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-after" value="after" ${this.getRecurrenceEndMode(recurrenceData) === 'after' ? 'checked' : ''} />
                  <span>${this.t('recurrenceAfter')}</span>
                </label>
                <div class="recurrence-after-input">
                  <input type="number" class="form-input" id="event-recurrence-count" min="1" placeholder="13" value="${this.escapeHtml(recurrenceData.count || '')}" ${this.getRecurrenceEndMode(recurrenceData) === 'after' ? '' : 'disabled'} />
                  <span>${this.t('recurrenceOccurrences')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div id="timed-event-fields" style="display: ${isAllDay ? 'none' : 'block'};">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('start')}</label>
                <input type="datetime-local" class="form-input" id="event-start" 
                       value="${formatDateTimeLocal(startDate)}" required />
              </div>
              
              <div class="form-group">
                <label class="form-label">${this.t('end')}</label>
                <input type="datetime-local" class="form-input" id="event-end" 
                       value="${formatDateTimeLocal(endDate)}" required />
              </div>
            </div>
          </div>
          
          <div id="all-day-event-fields" style="display: ${isAllDay ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('startDate')}</label>
                <input type="date" class="form-input" id="event-start-date" 
                       value="${formatDate(startDate)}" />
              </div>
              
              <div class="form-group">
                <label class="form-label">${this.t('endDate')}</label>
                <input type="date" class="form-input" id="event-end-date" 
                       value="${formatDate(endDate)}" />
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">${this.t('location')}</label>
            <input type="text" class="form-input" id="event-location" 
                   placeholder="${this.t('locationPlaceholder')}" 
                   value="${this.escapeHtml(event.location || '')}" />
          </div>
          
          <div class="form-group">
            <label class="form-label">${this.t('description')}</label>
            <textarea class="form-textarea" id="event-description" placeholder="${this.t('descriptionPlaceholder')}">${this.escapeHtml(event.description || '')}</textarea>
          </div>
          
          <div id="form-error" class="error-message" style="display: none;"></div>
          
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${this.t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${this.t('saveChanges')}</button>
          </div>
        </form>
      </div>
    `;
    
    modal.classList.add('show');
    
    // Event listeners
    const form = this.shadowRoot.getElementById('edit-event-form');
    const allDayCheckbox = this.shadowRoot.getElementById('event-all-day');
    const recurringCheckbox = this.shadowRoot.getElementById('event-recurring');
    const recurrenceFrequency = this.shadowRoot.getElementById('event-recurrence-frequency');
    const timedFields = this.shadowRoot.getElementById('timed-event-fields');
    const allDayFields = this.shadowRoot.getElementById('all-day-event-fields');
    const recurringFields = this.shadowRoot.getElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.shadowRoot.getElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this.shadowRoot.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.shadowRoot.getElementById('form-error');
    
    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });
    
    // Close button
    this.shadowRoot.getElementById('close-modal').addEventListener('click', () => {
      modal.classList.remove('show');
    });
    
    // Cancel button
    this.shadowRoot.getElementById('cancel-btn').addEventListener('click', () => {
      modal.classList.remove('show');
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const calendarId = this.shadowRoot.getElementById('event-calendar').value;
      const title = this.shadowRoot.getElementById('event-title').value.trim();
      const isAllDayChecked = this.shadowRoot.getElementById('event-all-day').checked;
      const location = this.shadowRoot.getElementById('event-location').value.trim();
      const description = this.shadowRoot.getElementById('event-description').value.trim();
      
      if (!title) {
        this.showFormError(errorDiv, this.t('eventTitleRequired'));
        return;
      }
      
      let eventData = {
        summary: title,
        location: location || undefined,
        description: description || undefined
      };
      
      if (isAllDayChecked) {
        const startDateStr = this.shadowRoot.getElementById('event-start-date').value;
        const endDateStr = this.shadowRoot.getElementById('event-end-date').value;
        
        if (!startDateStr || !endDateStr) {
          this.showFormError(errorDiv, this.t('startEndDatesRequired'));
          return;
        }
        
        // Validate that end date is on or after start date
        const start = new Date(startDateStr);
        const end = new Date(endDateStr);
        
        if (end < start) {
          this.showFormError(errorDiv, this.t('endDateBeforeStart'));
          return;
        }
        
        // For Home Assistant, end date is exclusive, so add 1 day
        const exclusiveEndDate = new Date(end);
        exclusiveEndDate.setDate(exclusiveEndDate.getDate() + 1);
        const exclusiveEndDateStr = exclusiveEndDate.toISOString().split('T')[0];
        
        eventData.start = { date: startDateStr };
        eventData.end = { date: exclusiveEndDateStr };
      } else {
        const startDateTime = this.shadowRoot.getElementById('event-start').value;
        const endDateTime = this.shadowRoot.getElementById('event-end').value;
        
        if (!startDateTime || !endDateTime) {
          this.showFormError(errorDiv, this.t('startEndTimesRequired'));
          return;
        }
        
        // Convert to ISO format
        const start = new Date(startDateTime);
        const end = new Date(endDateTime);
        
        if (end <= start) {
          this.showFormError(errorDiv, this.t('endTimeBeforeStart'));
          return;
        }
        
        eventData.start = { dateTime: start.toISOString() };
        eventData.end = { dateTime: end.toISOString() };
      }
      
      if (recurringCheckbox.checked) {
        const frequency = this.shadowRoot.getElementById('event-recurrence-frequency').value;
        const interval = this.shadowRoot.getElementById('event-recurrence-interval').value;
        const untilDateRaw = this.shadowRoot.getElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.shadowRoot.getElementById('event-recurrence-count').value;
        const recurrenceEndMode = this.shadowRoot.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this.shadowRoot.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);

        if (frequency === 'WEEKLY' && byDay.length === 0) {
          this.showFormError(errorDiv, this.t('recurrenceSelectWeekday'));
          return;
        }

        eventData.rrule = this.buildRRuleFromInputs({
          frequency,
          interval,
          untilDate,
          count: recurrenceCount,
          byDay: frequency === 'WEEKLY' ? byDay : []
        });
      }
      
      // Disable submit button
      const submitBtn = this.shadowRoot.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('saving');
      
      try {
        await this.updateEvent(event, calendarId, eventData, editScope);
        modal.classList.remove('show');
        
        // Refresh events
        this._lastFetch = null;
        await this.updateEvents();
      } catch (error) {
        console.error('Failed to update event:', error);

        // Safety net: if edit was blocked by capability detection, still try create+delete.
        // Some integrations misreport update/delete support even though create+delete works.
        if (error.message === this.t('calendarNoModifyError')) {
          try {
            await this.createEvent(calendarId, eventData);
            await this.deleteEvent(event.entityId, event.uid, event.recurrence_id);
            modal.classList.remove('show');
            this._lastFetch = null;
            await this.updateEvents();
            return;
          } catch (fallbackError) {
            console.error('Safety-net create+delete fallback failed:', fallbackError);
          }
        }

        this.showFormError(errorDiv, error.message || this.t('failedUpdateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('saveChanges');
      }
    });
    
    // Focus on title input
    setTimeout(() => {
      this.shadowRoot.getElementById('event-title')?.focus();
    }, 100);
  }

  async updateEvent(originalEvent, newCalendarId, eventData, editScope = 'this') {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }
    
    const capabilities = this._calendarCapabilities[originalEvent.entityId] || {};
    
    // Check if we're moving to a different calendar
    const movingCalendar = newCalendarId !== originalEvent.entityId;
    
    if (!originalEvent.uid) {
      throw new Error(this.t('missingUidError'));
    }

    const isRecurringUpdate = !!eventData.rrule || !!originalEvent.rrule;

    const recurrenceId = (isRecurringUpdate && editScope !== 'all') ? originalEvent.recurrence_id : null;
    const recurrenceRange = (isRecurringUpdate && editScope === 'future' && originalEvent.recurrence_id) ? 'THISANDFUTURE' : null;

    if (isRecurringUpdate && !movingCalendar && this._hass.connection?.sendMessagePromise) {
      const dtstart = eventData.start.dateTime || eventData.start.date;
      const dtend = eventData.end.dateTime || eventData.end.date;

      const eventPayload = {
        summary: eventData.summary,
        dtstart,
        dtend
      };

      if (eventData.location) {
        eventPayload.location = eventData.location;
      }

      if (eventData.description) {
        eventPayload.description = eventData.description;
      }

      if (eventData.rrule) {
        eventPayload.rrule = eventData.rrule;
      }

      const wsPayload = {
        type: 'calendar/event/update',
        entity_id: originalEvent.entityId,
        uid: originalEvent.uid,
        event: eventPayload
      };

      if (recurrenceId) {
        wsPayload.recurrence_id = recurrenceId;
      }

      if (recurrenceRange) {
        wsPayload.recurrence_range = recurrenceRange;
      }

      try {
        await this._hass.connection.sendMessagePromise(wsPayload);
        return;
      } catch (error) {
        console.error('Recurring update via WebSocket failed, falling back:', error?.message || error);
      }
    }
    
    // If calendar supports UPDATE, we're not moving calendars, and service exists, use update service
    const hasUpdateService = !!this._hass.services?.calendar?.update_event;
    if (capabilities.canUpdate && !movingCalendar && hasUpdateService) {
      try {
        const serviceData = {
          entity_id: originalEvent.entityId,
          uid: originalEvent.uid,
          summary: eventData.summary
        };
        
        // Add location if provided
        if (eventData.location) {
          serviceData.location = eventData.location;
        }
        
        // Add description if provided
        if (eventData.description) {
          serviceData.description = eventData.description;
        }
        
        // Add date/time fields
        if (eventData.start.date) {
          serviceData.start_date = eventData.start.date;
          serviceData.end_date = eventData.end.date;
        } else {
          serviceData.start_date_time = eventData.start.dateTime;
          serviceData.end_date_time = eventData.end.dateTime;
        }
        
        if (eventData.rrule) {
          serviceData.rrule = eventData.rrule;
        }

        // Add recurrence controls for recurring event edits
        if (recurrenceId) {
          serviceData.recurrence_id = recurrenceId;
        }

        if (recurrenceRange) {
          serviceData.recurrence_range = recurrenceRange;
        }
        
        await this._hass.callService('calendar', 'update_event', serviceData);
        return;
      } catch (error) {
        console.error('Update service failed, trying create+delete fallback:', error.message);
        // Fall through to create+delete pattern
      }
    } else if (capabilities.canUpdate && !movingCalendar && !hasUpdateService) {
      // Some integrations advertise update support but the service is not registered.
      // Skip update call to avoid misleading "Action calendar.update_event not found" pop-ups.
      console.debug('calendar.update_event service unavailable, using create+delete fallback');
    }
    
    // Fallback: Create new event and then delete old one
    // This prevents data loss when create fails on calendars without UPDATE support

    try {
      // Create in destination calendar first (might be same or different)
      await this.createEvent(newCalendarId, eventData);

      // Delete from original calendar only after successful create
      await this.deleteEvent(originalEvent.entityId, originalEvent.uid, recurrenceId, recurrenceRange);
    } catch (error) {
      console.error('Create+Delete fallback failed:', error);
      throw new Error(error.message || this.t('updateEventServiceError'));
    }
  }

  async deleteEvent(calendarId, uid, recurrenceId = null, recurrenceRange = null) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }
    
    // Try WebSocket API first (works for Google Calendar and others)
    // This is the official Calendar WebSocket API that the HA Calendar UI uses
    try {
      if (this._hass.connection && this._hass.connection.sendMessagePromise && uid) {
        const payload = {
          type: 'calendar/event/delete',
          entity_id: calendarId,
          uid: uid
        };
        
        // Add recurrence_id if deleting a specific instance
        if (recurrenceId) {
          payload.recurrence_id = recurrenceId;
        }
        
        // Add recurrence_range if deleting this and future events
        if (recurrenceRange) {
          payload.recurrence_range = recurrenceRange;
        }
        
        await this._hass.connection.sendMessagePromise(payload);
        return; // Success via WebSocket
      }
    } catch (wsError) {
      console.log('WebSocket delete failed, trying service call:', wsError.message);
      // Fall through to service call attempt
    }
    
    // Fallback to service call (works for Local Calendar and some others)
    const serviceData = {
      entity_id: calendarId,
      uid: uid
    };
    
    // Add recurrence_id if deleting a specific instance
    if (recurrenceId) {
      serviceData.recurrence_id = recurrenceId;
    }
    
    // Add recurrence_range if deleting this and future events  
    if (recurrenceRange) {
      serviceData.recurrence_range = recurrenceRange;
    }
    
    try {
      await this._hass.callService('calendar', 'delete_event', serviceData);
    } catch (error) {
      console.error('Service call delete also failed:', error);
      throw new Error(error.message || this.t('deleteEventServiceError'));
    }
  }

  async createEvent(calendarId, eventData) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const isRecurring = !!eventData.rrule;

    // Build service-style data (used by both API variants)
    const baseData = {
      entity_id: calendarId,
      summary: eventData.summary
    };

    if (eventData.location) {
      baseData.location = eventData.location;
    }

    if (eventData.description) {
      baseData.description = eventData.description;
    }

    if (eventData.start.date) {
      baseData.start_date = eventData.start.date;
      baseData.end_date = eventData.end.date;
    } else {
      baseData.start_date_time = eventData.start.dateTime;
      baseData.end_date_time = eventData.end.dateTime;
    }

    if (isRecurring) {
      baseData.rrule = eventData.rrule;

      const dtstart = baseData.start_date_time || baseData.start_date;
      const dtend = baseData.end_date_time || baseData.end_date;

      // HA recurring event support is exposed through Calendar WebSocket API.
      // Primary payload shape expects event.dtstart / event.dtend.
      const wsPayloadCandidates = [
        {
          type: 'calendar/event/create',
          entity_id: calendarId,
          event: {
            summary: baseData.summary,
            location: baseData.location,
            description: baseData.description,
            rrule: baseData.rrule,
            dtstart,
            dtend
          }
        },
        { type: 'calendar/event/create', ...baseData }
      ];

      let lastWsError = null;
      for (const payload of wsPayloadCandidates) {
        try {
          if (this._hass.connection?.sendMessagePromise) {
            await this._hass.connection.sendMessagePromise(payload);
            return;
          }
        } catch (error) {
          lastWsError = error;
        }
      }

      console.error('WebSocket recurring create failed:', lastWsError);
      throw new Error(lastWsError?.message || this.t('createEventServiceError'));
    }

    // Non-recurring events continue to use the traditional service call.
    try {
      await this._hass.callService('calendar', 'create_event', baseData);
    } catch (error) {
      console.error('Service call failed:', error);
      throw new Error(error.message || this.t('createEventServiceError'));
    }
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }


  showEditConfirmation(event, startDate, endDate, isAllDay) {
    const modal = this.shadowRoot.getElementById('event-modal');
    const content = this.shadowRoot.getElementById('modal-content');

    const isRecurring = event.rrule || event.recurrence_id;
    if (!isRecurring) {
      this.showEditEventModal(event, startDate, endDate, isAllDay, 'this');
      return;
    }

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editRecurringEventTitle')}</h3>
        <p class="confirm-message">
          ${this.t('editRecurringPrompt', { title: this.escapeHtml(event.summary || this.t('untitledEvent')) })}
        </p>

        <div class="recurring-options">
          <label class="recurring-option">
            <input type="radio" name="edit-option" value="this" checked />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
              <div class="recurring-option-description">${this.t('editThisOccurrence')}</div>
            </div>
          </label>

          ${event.recurrence_id ? `
            <label class="recurring-option">
              <input type="radio" name="edit-option" value="future" />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                <div class="recurring-option-description">${this.t('editThisOccurrenceAndFuture')}</div>
              </div>
            </label>
          ` : ''}

          <label class="recurring-option">
            <input type="radio" name="edit-option" value="all" />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('editEntireSeries')}</div>
            </div>
          </label>
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-edit-option-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-edit-option-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.shadowRoot.getElementById('cancel-edit-option-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.shadowRoot.getElementById('confirm-edit-option-btn')?.addEventListener('click', () => {
      const selectedOption = this.shadowRoot.querySelector('input[name="edit-option"]:checked')?.value || 'this';
      modal.classList.remove('show');
      this.showEditEventModal(event, startDate, endDate, isAllDay, selectedOption);
    });
  }


  showDeleteConfirmation(event) {
    const modal = this.shadowRoot.getElementById('event-modal');
    const content = this.shadowRoot.getElementById('modal-content');
    
    // Check if this is a recurring event
    const isRecurring = event.rrule || event.recurrence_id;
    
    if (isRecurring) {
      // Show recurring event deletion options
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteRecurringEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteRecurringPrompt', { title: this.escapeHtml(event.summary || this.t('untitledEvent')) })}
          </p>
          
          <div class="recurring-options">
            <label class="recurring-option">
              <input type="radio" name="delete-option" value="this" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
                <div class="recurring-option-description">${this.t('deleteThisOccurrence')}</div>
              </div>
            </label>
            
            ${event.recurrence_id ? `
              <label class="recurring-option">
                <input type="radio" name="delete-option" value="future" />
                <div class="recurring-option-label">
                  <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                  <div class="recurring-option-description">${this.t('deleteThisOccurrenceAndFuture')}</div>
                </div>
              </label>
            ` : ''}
            
            <label class="recurring-option">
              <input type="radio" name="delete-option" value="all" />
              <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('deleteEntireSeries')}</div>
              </div>
            </label>
          </div>
          
          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    } else {
      // Show simple confirmation for non-recurring events
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteEventConfirm', { title: this.escapeHtml(event.summary || this.t('untitledEvent')) })}
          </p>
          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    }
    
    modal.classList.add('show');
    
    // Cancel button
    this.shadowRoot.getElementById('cancel-delete-btn').addEventListener('click', () => {
      modal.classList.remove('show');
    });
    
    // Confirm delete button
    this.shadowRoot.getElementById('confirm-delete-btn').addEventListener('click', async () => {
      const deleteBtn = this.shadowRoot.getElementById('confirm-delete-btn');
      deleteBtn.disabled = true;
      deleteBtn.textContent = this.t('deleting');
      
      try {
        if (isRecurring) {
          // Get the selected option
          const selectedOption = this.shadowRoot.querySelector('input[name="delete-option"]:checked')?.value;
          
          if (selectedOption === 'this') {
            // Delete this instance only
            await this.deleteEvent(event.entityId, event.uid, event.recurrence_id);
          } else if (selectedOption === 'future') {
            // Delete this and future instances
            await this.deleteEvent(event.entityId, event.uid, event.recurrence_id, 'THISANDFUTURE');
          } else {
            // Delete entire series
            await this.deleteEvent(event.entityId, event.uid);
          }
        } else {
          // Delete single event
          await this.deleteEvent(event.entityId, event.uid);
        }
        
        modal.classList.remove('show');
        
        // Refresh events
        this._lastFetch = null;
        await this.updateEvents();
      } catch (error) {
        console.error('Failed to delete event:', error);
        alert(error.message || this.t('failedDeleteEvent'));
        deleteBtn.disabled = false;
        deleteBtn.textContent = this.t('delete');
      }
    });
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }

  showError(message) {
    console.error(message);
    // Could add a toast notification here
  }

  setModalBackHandler(onCloseBack = null) {
    this._activeModalBackHandler = typeof onCloseBack === 'function' ? onCloseBack : null;
  }

  showEventModal(event, onCloseBack = null) {
    const modal = this.shadowRoot.getElementById('event-modal');
    const content = this.shadowRoot.getElementById('modal-content');
    
    let startDate, endDate, isAllDay;
    
    if (event.start.dateTime) {
      startDate = new Date(event.start.dateTime);
      endDate = new Date(event.end.dateTime);
      isAllDay = false;
    } else if (event.start.date) {
      // For all-day events, add T00:00:00 to prevent timezone shifts
      startDate = new Date(event.start.date + 'T00:00:00');
      endDate = new Date(event.end.date + 'T00:00:00');
      
      // End date is exclusive for all-day events, so subtract 1 day for display
      endDate.setDate(endDate.getDate() - 1);
      isAllDay = true;
    } else {
      startDate = new Date(event.start);
      endDate = new Date(event.end);
      isAllDay = !event.start.includes('T');
      // If it's an all-day event in string format, adjust end date
      if (isAllDay && event.end) {
        endDate.setDate(endDate.getDate() - 1);
      }
    }
    
    // Get calendar info and capabilities
    const calendarName = this.getCalendarName(event.entityId);
    const capabilities = this._calendarCapabilities[event.entityId] || {};
    
    // For edit/delete to work, we need:
    // 1. Event management enabled
    // 2. Calendar not read-only
    // 3. Event has a UID (required for modifications)
    const hasUID = event.uid !== undefined && event.uid !== null && event.uid !== '';
    const canModify = this._config.enable_event_management && 
                     !capabilities.isReadonly && 
                     hasUID;
    
    // WebSocket delete works for Google Calendar and other integrations
    const canEdit = canModify;
    const canDelete = canModify; // WebSocket delete works for all calendars including Google
    
    content.innerHTML = `
      <div class="modal-header">
        <div>
          <h3 class="modal-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</h3>
          <div class="modal-calendar-badge" style="background: ${event.color}; color: white; display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-top: 8px;">
            ${this.escapeHtml(calendarName)}
          </div>
        </div>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="modal-row">
          <div class="modal-label">📅 ${this.t('start')}</div>
          <div class="modal-value">
            ${this.formatDate(startDate)}${!isAllDay ? ` ${this.t('at')} ${this.formatTime(startDate)}` : ` (${this.t('allDay')})`}
          </div>
        </div>
        <div class="modal-row">
          <div class="modal-label">🏁 ${this.t('end')}</div>
          <div class="modal-value">
            ${this.formatDate(endDate)}${!isAllDay ? ` ${this.t('at')} ${this.formatTime(endDate)}` : ` (${this.t('allDay')})`}
          </div>
        </div>
        ${!isAllDay ? `
          <div class="modal-row">
            <div class="modal-label">⏱️ ${this.t('duration')}</div>
            <div class="modal-value">${this.formatDuration(startDate, endDate)}</div>
          </div>
        ` : ''}
        ${event.location ? `
          <div class="modal-row">
            <div class="modal-label">📍 ${this.t('location')}</div>
            <div class="modal-value">${this.escapeHtml(event.location)}</div>
          </div>
        ` : ''}
        ${event.description ? `
          <div class="modal-row">
            <div class="modal-label">📝 ${this.t('description')}</div>
            <div class="modal-value" style="white-space: pre-wrap;">${this.escapeHtml(event.description)}</div>
          </div>
        ` : ''}
        ${event.attendees && event.attendees.length > 0 ? `
          <div class="modal-row">
            <div class="modal-label">👥 ${this.t('attendees')}</div>
            <div class="modal-value">
              ${event.attendees.map(a => this.escapeHtml(a.email || a.displayName || this.t('unknownAttendee'))).join(', ')}
            </div>
          </div>
        ` : ''}
        ${event.rrule ? `
          <div class="modal-row">
            <div class="modal-label">🔁 ${this.t('recurrence')}</div>
            <div class="modal-value">${this.t('recurringEvent')}</div>
          </div>
        ` : ''}
        
        ${!canModify && !capabilities.isReadonly && capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${this.t('googleCalendarLimitationTitle')}</strong> ${this.t('googleCalendarLimitationBody')}
          </div>
        ` : ''}
        
        ${!canModify && !hasUID && !capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${this.t('cannotModifyTitle')}</strong> ${this.t('cannotModifyBody')}
          </div>
        ` : ''}
        
        ${(canEdit || canDelete) ? `
          <div class="modal-actions">
            <div class="modal-actions-left">
              ${canDelete ? `<button class="btn btn-danger" id="delete-event-btn">${this.t('delete')}</button>` : ''}
            </div>
            <div class="modal-actions-right">
              ${canEdit ? `<button class="btn btn-primary" id="edit-event-btn">${this.t('editEvent')}</button>` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    `;
    
    modal.classList.add('show');
    this.setModalBackHandler(onCloseBack);

    // Close button
    this.shadowRoot.getElementById('close-modal')?.addEventListener('click', () => {
      if (this._activeModalBackHandler) {
        const backHandler = this._activeModalBackHandler;
        this._activeModalBackHandler = null;
        backHandler();
      } else {
        modal.classList.remove('show');
      }
    });
    
    // Edit button
    this.shadowRoot.getElementById('edit-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
      this.showEditConfirmation(event, startDate, endDate, isAllDay);
    });
    
    // Delete button
    this.shadowRoot.getElementById('delete-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
      this.showDeleteConfirmation(event);
    });
  }

  showDayCompactModal(date, events) {
    const modal = this.shadowRoot.getElementById('event-modal');
    const content = this.shadowRoot.getElementById('modal-content');

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="week-compact-container single-day-modal">
          <div class="week-day-column">
            <div class="week-day-header">
              <div class="week-day-name">${this.getWeekdayNames('short')[date.getDay()]}</div>
              <div class="week-day-date">${date.getDate()}</div>
            </div>
            ${sortedEvents.length > 0 ? sortedEvents.map(event => {
              const daySegment = this.getEventDaySegment(event, date);
              if (!daySegment) return '';
              const { segmentStart, isAllDaySegment } = daySegment;
              const timeLabel = isAllDaySegment ? this.t('allDay') : this.formatTime(segmentStart);
              return `
                <div class="week-compact-event" style="background: ${event.color}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                  <div class="week-compact-event-time">${timeLabel}</div>
                  <div class="week-compact-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
                </div>
              `;
            }).join('') : `<div class="empty-state-subtext">${this.t('noEvents')}</div>`}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.shadowRoot.getElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
    });

    this.shadowRoot.querySelectorAll('.week-compact-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData, () => this.showDayCompactModal(date, events));
      });
    });
  }

  showDayModal(date, events) {
    const modal = this.shadowRoot.getElementById('event-modal');
    const content = this.shadowRoot.getElementById('modal-content');
    
    const sortedEvents = this.sortEventsForDate(events, date);
    
    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        ${sortedEvents.map(event => {
          const daySegment = this.getEventDaySegment(event, date);
          if (!daySegment) return '';

          const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;

          return `
            <div class="day-event day-modal-event" style="background: ${event.color}15; border-left: 4px solid ${event.color};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="day-modal-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
              <div class="day-modal-event-meta">
                ${isAllDaySegment ? this.t('allDay') : `${this.formatTime(segmentStart)} - ${this.formatTime(segmentEnd)}`}
              </div>
              ${event.location ? `<div class="day-modal-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
    
    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.shadowRoot.getElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
    });
    
    this.shadowRoot.querySelectorAll('.day-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData);
      });
    });
  }

  getMonthName(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'long' });
    return formatter.format(new Date(2020, month, 1));
  }
  
  getMonthNameShort(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'short' });
    return formatter.format(new Date(2020, month, 1));
  }

  formatTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), { hour: 'numeric', minute: '2-digit' }).format(date);
  }

  formatDate(date) {
    return new Intl.DateTimeFormat(this.getLocale(), { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  }

  formatDuration(startDate, endDate) {
    const diffMs = endDate - startDate;
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;
    
    const parts = [];
    if (hours > 0) {
      parts.push(this.t(hours === 1 ? 'durationHour' : 'durationHours', { count: hours }));
    }
    if (minutes > 0) {
      parts.push(this.t(minutes === 1 ? 'durationMinute' : 'durationMinutes', { count: minutes }));
    }
    if (parts.length === 0) {
      return this.t('durationMinutes', { count: 0 });
    }
    return parts.join(' ');
  }

  getCalendarName(entityId) {
    // Check if there's a custom name mapping
    if (this._config.calendar_names && this._config.calendar_names[entityId]) {
      return this._config.calendar_names[entityId];
    }
    
    // Otherwise use friendly_name from entity or entity ID
    const entity = this._hass?.states[entityId];
    return entity?.attributes?.friendly_name || entityId.split('.')[1];
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  normalizeBackgroundImageUrl(url) {
    if (!url) return null;

    const value = String(url).trim();
    if (!value) return null;

    const mediaSourcePrefix = 'media-source://media_source/local/';
    if (value.startsWith(mediaSourcePrefix)) {
      const localPath = value.slice(mediaSourcePrefix.length);
      return `/media/local/${localPath}`;
    }

    return value;
  }

  static getStubConfig() {
    return {
      title: 'Family Calendar',
      entities: ['calendar.personal'],
      default_view: 'month',
      show_week_numbers: false,
      first_day_of_week: 0,
      week_days: [0, 1, 2, 3, 4, 5, 6],
      week_start_hour: 8,
      week_end_hour: 21,
      hide_event_calendar_bubble: false,
      event_font_size: 11,
      event_font_colors: {},
      hide_times_for_calendars: [],
      show_current_time_bar: false,
      background_transparent: false,
      background_image_url: null,
      enable_event_management: true
    };
  }

  getCardSize() {
    return 6;
  }
}

customElements.define('skylight-calendar-card', SkylightCalendarCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'skylight-calendar-card',
  name: 'Skylight Calendar Card',
  description: 'A beautiful calendar card inspired by Skylight Calendar',
  preview: true,
  documentationURL: 'https://github.com/superdingo101/skylight-calendar-card'
});
